import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import ORDER_QUERY_KEYS from '@/features/order/constants/query-key';
import getQuote from '@/features/order/apis/bff/get-quote';
import type { Quote } from '@/features/order/models/quote';

const useQuote = (fromCurrency: string, toCurrency: string, forexAmount: number) => {
  return useQuery<Quote>({
    queryKey: ORDER_QUERY_KEYS.QUOTE(fromCurrency, toCurrency, forexAmount),
    queryFn: async () => {
      const result = await getQuote(fromCurrency, toCurrency, forexAmount);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: 'always',
  });
};

export default useQuote;
