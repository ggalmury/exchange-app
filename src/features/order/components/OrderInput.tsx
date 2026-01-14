'use client';

import { useEffect, InputHTMLAttributes, ChangeEvent } from 'react';

import { cn } from '@/shared/utils/cn';
import { toNumber } from '@/shared/utils/transform';
import { currencyTranslate } from '@/shared/constants/currency';
import useDebounce from '@/shared/hooks/useDebounce';

import useQuote from '@/features/order/hooks/useQuote';
import useOrderStore from '@/features/order/stores/useOrderStore';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const OrderInput = ({ label, ...rest }: LoginInputProps) => {
  const currency = useOrderStore((state) => state.currency);
  const orderType = useOrderStore((state) => state.orderType);
  const amount = useOrderStore((state) => state.amount);
  const setAmount = useOrderStore((state) => state.setAmount);

  const debouncedAmount = useDebounce(amount, 200);

  const { refetch: refetchQuote } = useQuote();

  useEffect(() => {
    if (debouncedAmount > 0) refetchQuote();
  }, [orderType, currency, debouncedAmount]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const numericValue = toNumber(value);

    setAmount(numericValue);
  };

  return (
    <div className="flex flex-col gap-2 text-left">
      <p className="text-[1.25rem] font-medium text-gray-600">{label}</p>

      <div className="relative">
        <input
          {...rest}
          className={cn(
            'w-full rounded-lg border border-gray-300 bg-white p-5 pr-28 text-right text-xl font-semibold text-gray-600',
            'placeholder:text-gray-400',
            'focus:border-gray-700',
          )}
          onChange={handleChange}
        />

        <p className="absolute top-1/2 right-6 -translate-y-1/2 text-[1.25rem] font-medium text-gray-600">
          {currency && currencyTranslate[currency]} {orderType === 'BUY' ? '사기' : '팔기'}
        </p>
      </div>
    </div>
  );
};

export default OrderInput;
