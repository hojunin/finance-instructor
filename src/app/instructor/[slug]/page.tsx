'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { questions } from '@/lib/constants/questions';
import { categories } from '@/lib/constants/categories';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import QuestionList from '@/components/instructor-detail/question-list';
import AnswerForm from '@/components/instructor-detail/answer-form';
import UsageIndicator from '@/components/instructor-detail/usage-indicator';
import ResultSection from '@/components/instructor-detail/result-section';

interface QuestionResult {
  [key: string]: {
    score: number;
    status: 'correct' | 'partially_correct' | 'incorrect';
  };
}

export default function InstructorPage() {
  const params = useParams();
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abortController = useRef<AbortController | null>(null);
  const [usageCount, setUsageCount] = useState<number | null>(null);
  const { data: session } = useSession();
  const [result, setResult] = useState<{
    score?: number;
    feedback?: string;
    status?: 'correct' | 'partially_correct' | 'incorrect';
    error?: {
      title: string;
      message: string;
    };
  } | null>(null);
  const [questionResults, setQuestionResults] = useState<QuestionResult>({});

  const currentQuestions = questions[params.slug as string] || [];
  const categoryInfo = categories.find((cat) =>
    cat.items.some((item) => item.slug === params.slug),
  );

  useEffect(() => {
    const fetchUsage = async () => {
      if (!session) {
        const response = await fetch('/api/usage');
        const data = await response.json();
        setUsageCount(data.count);
      }
    };
    fetchUsage();
  }, [session]);

  const handleSelectQuestion = useCallback((id: string) => {
    setSelectedQuestion(id);
    setResult(null);
    setAnswer('');
  }, []);

  const handleAnswerChange = useCallback((value: string) => {
    setAnswer(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!answer.trim() || !selectedQuestion) return;

    const controller = new AbortController();
    abortController.current = controller;
    setIsSubmitting(true);
    setResult({});

    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: currentQuestions.find((q) => q.id === selectedQuestion),
          answer,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        let errorMessage = '평가 중 오류가 발생했습니다';

        switch (response.status) {
          case 429:
            errorMessage =
              '무료 사용량을 모두 소진했습니다. 로그인하여 계속 사용하세요.';
            break;
          case 400:
            errorMessage = '잘못된 요청입니다. 입력을 확인해주세요.';
            break;
          case 401:
            errorMessage = '인증이 필요합니다.';
            break;
          case 502:
            errorMessage = 'AI 서비스 연결에 실패했습니다.';
            break;
        }

        setResult({
          error: {
            title: `Error ${response.status}`,
            message: errorMessage,
          },
        });
        toast.error(errorMessage);
        return;
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('스트림을 읽을 수 없습니다.');

      let accumulatedContent = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        const lines = text.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const content = line.slice(6);
            accumulatedContent += content;

            try {
              // 부분적인 JSON 파싱 시도
              const partialResult = JSON.parse(accumulatedContent);

              // 각 필드가 있을 때마다 개별적으로 업데이트
              setResult((prev) => ({
                ...prev,
                ...(partialResult.score !== undefined && {
                  score: partialResult.score,
                }),
                ...(partialResult.feedback && {
                  feedback: partialResult.feedback,
                }),
                ...(partialResult.status && { status: partialResult.status }),
              }));

              // 모든 필드가 완성되었을 때 최종 처리
              if (
                partialResult.score !== undefined &&
                partialResult.feedback &&
                partialResult.status &&
                selectedQuestion
              ) {
                setQuestionResults((prev) => ({
                  ...prev,
                  [selectedQuestion]: {
                    score: partialResult.score,
                    status: partialResult.status,
                  },
                }));
                if (!session) {
                  setUsageCount((prev) => (prev !== null ? prev + 1 : 1));
                }
                toast.success(`획득 점수: ${partialResult.score}점`, {
                  description: partialResult.feedback,
                });
              }
            } catch {
              // JSON이 아직 완성되지 않음, 계속 누적
              continue;
            }
          }
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setResult({
          error: {
            title: '요청 취소됨',
            message: '평가가 취소되었습니다.',
          },
        });
        toast.error('요청이 취소되었습니다.');
      } else {
        setResult({
          error: {
            title: '오류 발생',
            message: '평가 중 오류가 발생했습니다.',
          },
        });
        toast.error('평가 중 오류가 발생했습니다.');
        console.error('Error:', error);
      }
    } finally {
      setIsSubmitting(false);
      abortController.current = null;
    }
  }, [answer, selectedQuestion, currentQuestions, session]);

  const handleCancel = useCallback(() => {
    if (abortController.current) {
      abortController.current.abort();
    }
  }, []);

  const selectedQuestionData = selectedQuestion
    ? currentQuestions.find((q) => q.id === selectedQuestion)
    : null;

  // 전체 점수 계산
  const totalScore = currentQuestions.reduce(
    (acc, question) => acc + question.score,
    0,
  );
  const earnedScore = Object.values(questionResults).reduce(
    (acc, result) => acc + result.score,
    0,
  );
  const completedQuestions = Object.keys(questionResults).length;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {categoryInfo?.items.find((item) => item.slug === params.slug)?.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            진행률: {completedQuestions}/{currentQuestions.length}문제
          </div>
          <div className="bg-secondary p-2 rounded-lg">
            <span className="font-semibold">
              총점: {earnedScore}/{totalScore}점
            </span>
          </div>
        </div>
      </div>

      <QuestionList
        questions={currentQuestions}
        selectedQuestion={selectedQuestion}
        onSelectQuestion={handleSelectQuestion}
        results={questionResults}
      />

      <AnimatePresence>
        {selectedQuestionData && (
          <AnswerForm
            question={selectedQuestionData}
            answer={answer}
            isSubmitting={isSubmitting}
            onAnswerChange={handleAnswerChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {result && selectedQuestionData && (
          <ResultSection
            score={result.score}
            feedback={result.feedback}
            status={result.status}
            maxScore={selectedQuestionData.score}
          />
        )}
      </AnimatePresence>

      {!session && usageCount !== null && (
        <UsageIndicator usageCount={usageCount} />
      )}
    </div>
  );
}
