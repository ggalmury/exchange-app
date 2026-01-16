import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import useOrderStore from '@/features/order/stores/useOrderStore';

import type { ExchangeRate } from '@/features/exchange-rate/models/exchange-rate';
import EXCHANGE_RATE_QUERY_KEYS from '@/features/exchange-rate/constants/query-key';
import getLatestExchangeRates from '@/features/exchange-rate/apis/bff/get-latest-exchange-rates';

const useLatestExchangeRates = () => {
  const currentExchangeRateId = useOrderStore((state) => state.exchangeRateId);
  const currentCurrency = useOrderStore((state) => state.currency);
  const setCurrency = useOrderStore((state) => state.setCurrency);

  return useQuery<ExchangeRate[]>({
    queryKey: EXCHANGE_RATE_QUERY_KEYS.LATEST,
    queryFn: async () => {
      const result = await getLatestExchangeRates();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      const data = result.data;
      if (!currentExchangeRateId || !currentCurrency) {
        const initialExchangeRate = data[0];
        const { exchangeRateId, currency } = initialExchangeRate;

        setCurrency(exchangeRateId, currency);

        return data;
      }

      const newExchangeRate = data.find(
        (exchangeRate) => exchangeRate.currency === currentCurrency,
      );
      if (newExchangeRate) {
        const { exchangeRateId, currency } = newExchangeRate;

        setCurrency(exchangeRateId, currency);
      }

      return data;
    },
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
  });
};

export default useLatestExchangeRates;
