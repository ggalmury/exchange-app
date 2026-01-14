import { currencyTranslateWithCountry } from '@/shared/constants/currency';
import type { ExchangeRate } from '@/features/exchange-rate/models/exchange-rate';
import ChangePercentageText from '@/features/exchange-rate/components/ChangePercentageText';

interface ExchangeRateCardProps {
  exchangeRate: ExchangeRate;
}

const ExchangeRateCard = ({ exchangeRate }: ExchangeRateCardProps) => {
  const { currency, rate, changePercentage } = exchangeRate;

  return (
    <div className="flex min-h-35.75 min-w-76 flex-col justify-between rounded-xl border border-gray-300 bg-white px-8 py-5">
      <div className="flex items-center justify-between text-gray-600">
        <p className="text-xl font-semibold">{currency}</p>
        <p className="text-base">{currencyTranslateWithCountry[currency]}</p>
      </div>

      <p className="text-2xl font-bold text-gray-800">{rate.toLocaleString()} KRW</p>

      <ChangePercentageText changePercentage={changePercentage} />
    </div>
  );
};

export default ExchangeRateCard;
