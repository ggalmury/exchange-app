import { createBffHandler } from '@/shared/utils/bff';
import { getTokenFromCookieOrThrow } from '@/shared/cookie/token';

import fetchLatestExchangeRates from '@/features/exchange-rate/apis/server/fetch-latest-exchange-rates';
import type { ExchangeRate } from '@/features/exchange-rate/models/exchange-rate';

const latestExchangeRatesHandler = async (): Promise<ExchangeRate[]> => {
  const storedToken = await getTokenFromCookieOrThrow();

  return await fetchLatestExchangeRates(storedToken);
};

export const GET = createBffHandler(latestExchangeRatesHandler);
