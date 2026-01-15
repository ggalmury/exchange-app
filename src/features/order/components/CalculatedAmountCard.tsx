'use client';

import { cn } from '@/shared/utils/cn';

import Skeleton from '@/components/Skeleton';

import useOrderStore from '@/features/order/stores/useOrderStore';
import useQuote from '@/features/order/hooks/useQuote';

const CalculatedAmountCard = () => {
  const orderType = useOrderStore((state) => state.orderType);

  const { data: quote, isLoading } = useQuote();

  return (
    <div className="flex flex-col gap-2 text-left">
      <p className="text-[1.25rem] font-medium text-gray-600">필요 원화</p>

      {isLoading ? (
        <Skeleton className="h-17.5 w-full" />
      ) : (
        <div className="w-full rounded-lg border border-gray-400 bg-gray-100 p-5 text-right">
          <p className="text-[1.25rem] font-bold">
            <span className="font-semibold">{quote?.krwAmount.toLocaleString() ?? '0'}</span>

            <span className={cn(orderType === 'BUY' ? 'text-red-500' : 'text-blue-500')}>
              {orderType === 'BUY' ? ' 원 필요해요' : ' 원 받을 수 있어요'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculatedAmountCard;
