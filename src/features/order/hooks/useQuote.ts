import { useQuery } from '@tanstack/react-query';

import InvalidFormError from '@/shared/errors/client/invalid-form-error';
import ResultError from '@/shared/errors/client/result-error';

import { getFromCurrency, getToCurrency } from '@/features/order/utils/currency';
import ORDER_QUERY_KEYS from '@/features/order/constants/query-key';
import { OrderErrorCode } from '@/features/order/errors/order-error-code';
import useOrderStore from '@/features/order/stores/useOrderStore';
import getQuote from '@/features/order/apis/bff/get-quote';
import type { Quote } from '@/features/order/models/quote';

const useQuote = () => {
  const exchangeRateId = useOrderStore((state) => state.exchangeRateId);
  const currency = useOrderStore((state) => state.currency);
  const orderType = useOrderStore((state) => state.orderType);
  const amount = useOrderStore((state) => state.amount);

  return useQuery<Quote>({
    queryKey: ORDER_QUERY_KEYS.QUOTE(orderType, amount, exchangeRateId, currency),
    queryFn: async () => {
      if (!exchangeRateId || !currency) {
        throw new InvalidFormError(OrderErrorCode.CURRENCY_NOT_PROVIDED);
      }

      const fromCurrency = getFromCurrency(orderType, currency);
      const toCurrency = getToCurrency(orderType, currency);

      const result = await getQuote(fromCurrency, toCurrency, amount);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: 'always',
    enabled: false,
  });
};

export default useQuote;
