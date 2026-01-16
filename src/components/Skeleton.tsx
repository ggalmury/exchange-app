import { ClassValue } from 'clsx';

import { cn } from '@/shared/utils/cn';

interface SkeletonItemProps {
  className?: ClassValue;
}

const Skeleton = ({ className }: SkeletonItemProps) => {
  return <div className={cn('animate-pulse rounded-xl bg-gray-100', className)} />;
};

export default Skeleton;
