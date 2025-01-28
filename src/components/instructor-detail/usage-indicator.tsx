'use client';

import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

interface UsageIndicatorProps {
  usageCount: number;
}

function UsageIndicator({ usageCount }: UsageIndicatorProps) {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-secondary p-4 rounded-lg shadow-lg">
        <p className="text-sm">남은 무료 사용량: {10 - usageCount}회</p>
        <Button
          variant="link"
          onClick={() => signIn()}
          className="text-xs text-primary"
        >
          로그인하여 무제한 사용하기
        </Button>
      </div>
    </div>
  );
}

export default memo(UsageIndicator);
