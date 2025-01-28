import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorSectionProps {
  title?: string;
  message: string;
  retry?: () => void;
}

export default function ErrorSection({
  title = '오류가 발생했습니다',
  message,
  retry,
}: ErrorSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg bg-red-50 p-6"
    >
      <div className="flex items-center gap-3">
        <AlertCircle className="h-6 w-6 text-red-500" />
        <h3 className="text-lg font-semibold text-red-800">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-red-700">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="mt-4 rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-200"
        >
          다시 시도
        </button>
      )}
    </motion.div>
  );
}
