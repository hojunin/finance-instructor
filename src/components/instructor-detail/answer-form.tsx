'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Question } from '@/lib/constants/questions';

interface AnswerFormProps {
  question: Question;
  answer: string;
  isSubmitting: boolean;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

function AnswerForm({
  question,
  answer,
  isSubmitting,
  onAnswerChange,
  onSubmit,
  onCancel,
}: AnswerFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="space-y-4"
    >
      <Card>
        <CardHeader>
          <CardTitle>{question.title}</CardTitle>
          <CardDescription>{question.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="답변을 입력하세요..."
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            disabled={isSubmitting}
            className="min-h-[200px]"
          />
          <div className="flex justify-end space-x-2">
            {isSubmitting && (
              <Button variant="destructive" onClick={onCancel}>
                취소
              </Button>
            )}
            <Button
              onClick={onSubmit}
              disabled={isSubmitting || !answer.trim()}
            >
              {isSubmitting ? '평가 중...' : '제출'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default memo(AnswerForm);
