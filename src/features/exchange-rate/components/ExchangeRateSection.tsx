'use client';

import useLatestExchangeRates from '@/features/exchange-rate/hooks/useLatestExchangeRates';
import ExchangeRateCard from '@/features/exchange-rate/components/ExchangeRateCard';

const ExchangeRateSection = () => {
  const { data: exchangeRates, isLoading } = useLatestExchangeRates();

  if (isLoading) return null;
  if (!exchangeRates) return null;

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
