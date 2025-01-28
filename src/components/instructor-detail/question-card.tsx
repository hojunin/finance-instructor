'use client';

import { memo } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Question } from '@/lib/constants/questions';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  isSelected: boolean;
  onSelect: (id: string) => void;
  result?: {
    score: number;
    status: 'correct' | 'partially_correct' | 'incorrect';
  };
}

const statusColors = {
  correct: 'border-green-500',
  partially_correct: 'border-yellow-500',
  incorrect: 'border-red-500',
};

function QuestionCard({
  question,
  isSelected,
  onSelect,
  result,
}: QuestionCardProps) {
  return (
    <Card
      className={cn(
        'min-w-[300px] w-[350px] cursor-pointer transition-all border-2',
        isSelected
          ? 'border-primary'
          : result?.status
          ? statusColors[result.status]
          : 'border-border', // 기본 테두리 색상
      )}
      onClick={() => onSelect(question.id)}
    >
      <CardHeader>
        <CardTitle className="break-words">{question.title}</CardTitle>
        <CardDescription className="break-words space-y-1">
          <div>배점: {question.score}점</div>
          {result && <div className="font-medium">획득: {result.score}점</div>}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default memo(QuestionCard);
