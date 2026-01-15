import { useQueryClient, useMutation } from '@tanstack/react-query';

import InvalidFormError from '@/shared/errors/client/invalid-form-error';
import ResultError from '@/shared/errors/client/result-error';

import EXCHANGE_RATE_QUERY_KEYS from '@/features/exchange-rate/constants/query-key';

import WALLET_QUERY_KEYS from '@/features/wallet/constants/query-key';

import type { OrderRequest } from '@/features/order/models/order-request';
import { getFromCurrency, getToCurrency } from '@/features/order/utils/currency';
import ORDER_QUERY_KEYS from '@/features/order/constants/query-key';
import { OrderErrorCode } from '@/features/order/errors/order-error-code';
import useOrderStore from '@/features/order/stores/useOrderStore';
import useQuote from '@/features/order/hooks/useQuote';
import order from '@/features/order/apis/bff/order';

interface UseOrderParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useOrder = ({ onSuccess, onError }: UseOrderParams = {}) => {
  const queryClient = useQueryClient();

  const exchangeRateId = useOrderStore((state) => state.exchangeRateId);
  const currency = useOrderStore((state) => state.currency);
  const orderType = useOrderStore((state) => state.orderType);
  const forexAmount = useOrderStore((state) => state.amount);

  const { refetch: refetchQuote } = useQuote();

  return useMutation({
    mutationFn: async () => {
      if (!exchangeRateId || !currency) {
        throw new InvalidFormError(OrderErrorCode.CURRENCY_NOT_PROVIDED);
      }
      if (forexAmount <= 0) {
        throw new InvalidFormError(OrderErrorCode.AMOUNT_NOT_PROVIDED);
      }

      const fromCurrency = getFromCurrency(orderType, currency);
      const toCurrency = getToCurrency(orderType, currency);

      const orderRequest: OrderRequest = { exchangeRateId, fromCurrency, toCurrency, forexAmount };

      const result = await order(orderRequest);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: WALLET_QUERY_KEYS.MY });
      queryClient.invalidateQueries({ queryKey: ORDER_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError: (error) => {
      if (error instanceof ResultError && error.code === OrderErrorCode.EXCHANGE_RATE_MISMATCH) {
        queryClient.invalidateQueries({ queryKey: EXCHANGE_RATE_QUERY_KEYS.LATEST });
        refetchQuote();
      }

      onError?.(error);
    },
  });
};

export default useOrder;
