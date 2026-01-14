'use client';

import useOrderStore from '@/features/order/stores/useOrderStore';
import useQuote from '@/features/order/hooks/useQuote';

const AppliedExchangeRateRow = () => {
  const currency = useOrderStore((state) => state.currency);

  const { data: quote, isLoading, isError, error } = useQuote();

  if (isLoading) return null;
  if (isError) throw error;
  if (!quote) return null;

  return (
    <div className="flex w-full items-center justify-between text-[1.25rem]">
      <p className="font-medium text-gray-600">적용 환율</p>

      <p className="font-semibold">
        1 {currency} = {quote.appliedRate.toLocaleString()} 원
      </p>
    </div>
  );
};

export default AppliedExchangeRateRow;
