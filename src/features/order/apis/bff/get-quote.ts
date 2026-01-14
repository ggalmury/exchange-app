import type { Result } from '@/shared/models/result';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';

import type { Quote } from '@/features/order/models/quote';

const getQuote = async (
  fromCurrency: string,
  toCurrency: string,
  forexAmount: number,
): Promise<Result<Quote>> => {
  const endpoint = `/orders/quote?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}&forexAmount=${forexAmount}`;

  return await bffFetcher<Quote>({
    endpoint,
    method: 'GET',
  });
};

export default getQuote;
