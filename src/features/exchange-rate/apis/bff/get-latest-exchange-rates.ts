import type { Result } from '@/shared/models/result';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';

import type { ExchangeRate } from '@/features/exchange-rate/models/exchange-rate';

const getLatestExchangeRates = async (): Promise<Result<ExchangeRate[]>> => {
  const endpoint = '/exchange-rates/latest';

  return await bffFetcher<ExchangeRate[]>({
    endpoint,
    method: 'GET',
  });
};

export default getLatestExchangeRates;
