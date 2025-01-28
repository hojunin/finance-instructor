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
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import ErrorSection from '../common/error-section';

interface ResultSectionProps {
  score?: number;
  feedback?: string;
  status?: 'correct' | 'partially_correct' | 'incorrect';
  maxScore: number;
  error?: {
    title: string;
    message: string;
  };
}

const statusConfig = {
  correct: {
    label: '정답',
    color: 'bg-green-500',
  },
  partially_correct: {
    label: '부분 정답',
    color: 'bg-yellow-500',
  },
  incorrect: {
    label: '오답',
    color: 'bg-red-500',
  },
};

function ResultSection({
  score,
  feedback,
  status,
  maxScore,
  error,
}: ResultSectionProps) {
  if (error) {
    return <ErrorSection title={error.title} message={error.message} />;
  }

  const { label, color } = statusConfig[status || 'incorrect'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg shadow p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">평가 결과</h3>
        <div className="text-lg">
          점수:{' '}
          {score !== undefined ? (
            <span className="font-bold">
              {score}/{maxScore}
            </span>
          ) : (
            <span className="inline-flex items-center">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              평가 중...
            </span>
          )}
        </div>
      </div>

      {status ? (
        <div className={`text-sm ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </div>
      ) : (
        <div className="h-5" /> // 상태 영역 공간 확보
      )}

      {feedback ? (
        <p className="text-gray-600 whitespace-pre-wrap">{feedback}</p>
      ) : (
        <div className="space-y-2">
          <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4" />
          <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2" />
          <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3" />
        </div>
      )}
    </motion.div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case 'correct':
      return 'text-green-600';
    case 'partially_correct':
      return 'text-yellow-600';
    case 'incorrect':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'correct':
      return '정답입니다!';
    case 'partially_correct':
      return '부분적으로 정답입니다.';
    case 'incorrect':
      return '틀렸습니다.';
    default:
      return '';
  }
}

export default memo(ResultSection);
