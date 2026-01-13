import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { ExchangeRate } from '@/features/exchange-rate/models/exchange-rate';

const fetchLatestExchangeRates = async (token: string): Promise<ExchangeRate[]> => {
  const endpoint = '/exchange-rates/latest';

  return await apiFetcher<ExchangeRate[]>({
    endpoint,
    method: 'GET',
    token,
  });
};

export default fetchLatestExchangeRates;
