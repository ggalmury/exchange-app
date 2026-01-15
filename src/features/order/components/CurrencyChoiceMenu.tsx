'use client';

import { cn } from '@/shared/utils/cn';

import { currencyCountry } from '@/shared/constants/currency';

import useOrderStore from '@/features/order/stores/useOrderStore';
import useLatestExchangeRates from '@/features/exchange-rate/hooks/useLatestExchangeRates';

interface CurrencyChoiceMenuProps {
  onChoice: () => void;
}

const CurrencyChoiceMenu = ({ onChoice }: CurrencyChoiceMenuProps) => {
  const { data: exchangeRates, isLoading } = useLatestExchangeRates();

  const setCurrency = useOrderStore((state) => state.setCurrency);

  if (isLoading) return null;
  if (!exchangeRates) return null;

  return (
    <div className="flex w-36 flex-col rounded-xl border border-gray-200 bg-white py-2">
      {exchangeRates.map((exchangeRate) => {
        const { exchangeRateId, currency } = exchangeRate;

        return (
          <button
            key={`currency-choice-menu-${currency}`}
            className={cn('py-3 text-sm font-medium', 'hover:bg-gray-50')}
            type="button"
            onClick={() => {
              setCurrency(exchangeRateId, currency);
              onChoice();
            }}
          >
            {currencyCountry[currency]} {currency}
          </button>
        );
      })}
    </div>
  );
};

export default CurrencyChoiceMenu;
