import { cn } from '@/shared/utils/cn';

interface ChangePercentageTextProps {
  changePercentage: number;
}

const ChangePercentageText = ({ changePercentage }: ChangePercentageTextProps) => {
  const hasIncreased = changePercentage >= 0;
  const textColor = hasIncreased ? 'text-red-500' : 'text-blue-500';

  return (
    <p className={cn('px-2 text-base', textColor)}>
      {hasIncreased ? `▲ +${changePercentage}%` : `▼ ${changePercentage}%`}
    </p>
  );
};

export default ChangePercentageText;
