import { openai } from '@/lib/openai';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function POST(req: Request) {
  try {
    // 1. 인증 체크
    const token = await getToken({ req }).catch(() => null);

    // 2. 사용량 체크
    if (!token) {
      const usageKey = req.headers.get('x-forwarded-for') || 'anonymous';
      try {
        const usage = await getUsageCount(usageKey);
        if (usage >= 10) {
          return new NextResponse('Usage limit exceeded', { status: 429 });
        }
      } catch (error) {
        console.error('Usage check error:', error);
        return new NextResponse('Usage check failed', { status: 500 });
      }
    }

    // 3. 요청 데이터 파싱
    const { question, answer } = await req.json();

    // 4. OpenAI API 호출
    const stream = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `You are an AI evaluator for economics education. Evaluate student answers and provide:
          1. A score (number between 0-${question.score})
          2. Detailed feedback in Korean
          3. Status: "correct" for perfect answers, "partially_correct" for partial understanding, "incorrect" for wrong answers
          Return response in this JSON format only:
          {
            "score": number,
            "feedback": "string",
            "status": "correct" | "partially_correct" | "incorrect"
          }`,
        },
        {
          role: 'user',
          content: `Question: ${question.title}\n${question.description}\nStudent's Answer: ${answer}`,
        },
      ],
      temperature: 0.7,
      stream: true, // 스트리밍 활성화
    });

    // 스트림 응답 설정
    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
      async start(controller) {
        let accumulatedContent = '';
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            accumulatedContent += content;
            controller.enqueue(encoder.encode(`data: ${content}\n\n`));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(customStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

async function getUsageCount(key: string): Promise<number> {
  // 이전 사용량 체크 로직 유지
  return 0; // 실제 구현에 맞게 수정
}
