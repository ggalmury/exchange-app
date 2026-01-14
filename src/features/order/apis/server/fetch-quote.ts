import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Quote } from '@/features/order/models/quote';

const fetchQuote = async (
  fromCurrency: string,
  toCurrency: string,
  forexAmount: string,
  token: string,
): Promise<Quote> => {
  const endpoint = `/orders/quote?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}&forexAmount=${forexAmount}`;

  return await apiFetcher<Quote>({
    endpoint,
    method: 'GET',
    token,
  });
};

export default fetchQuote;
