'use client';

import { memo } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import QuestionCard from './question-card';
import { Question } from '@/lib/constants/questions';

interface QuestionListProps {
  questions: Question[];
  selectedQuestion: string | null;
  onSelectQuestion: (id: string) => void;
  results: {
    [key: string]: {
      score: number;
      status: 'correct' | 'partially_correct' | 'incorrect';
    };
  };
}

function QuestionList({
  questions,
  selectedQuestion,
  onSelectQuestion,
  results,
}: QuestionListProps) {
  return (
    <ScrollArea className="w-full rounded-md border">
      <div className="flex flex-nowrap gap-4 p-4">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            isSelected={selectedQuestion === question.id}
            onSelect={onSelectQuestion}
            result={results[question.id]}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default memo(QuestionList);
