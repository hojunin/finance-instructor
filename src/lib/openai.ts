import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com/v1',
});

export interface EvaluationResult {
  score: number;
  feedback: string;
  status: 'correct' | 'partially_correct' | 'incorrect';
}
