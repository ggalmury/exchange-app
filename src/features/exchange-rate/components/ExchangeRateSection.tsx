'use client';

import Skeleton from '@/components/Skeleton';

import useLatestExchangeRates from '@/features/exchange-rate/hooks/useLatestExchangeRates';
import ExchangeRateCard from '@/features/exchange-rate/components/ExchangeRateCard';

const ExchangeRateSection = () => {
  const { data: exchangeRates, isLoading } = useLatestExchangeRates();

  if (isLoading || !exchangeRates) {
    return (
      <div className="flex flex-row gap-6">
        <Skeleton className="min-h-35.75 min-w-76" />

        <Skeleton className="min-h-35.75 min-w-76" />
      </div>
    );
  }

  return (
    <section className="flex flex-row gap-6">
      {exchangeRates.map((exchangeRates) => {
        return (
          <ExchangeRateCard
            key={`exchange-rate-${exchangeRates.currency}`}
            exchangeRate={exchangeRates}
          />
        );
      })}
    </section>
  );
};

export default ExchangeRateSection;
