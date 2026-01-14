import { useQueryClient, useMutation } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import EXCHANGE_RATE_QUERY_KEYS from '@/features/exchange-rate/constants/query-key';

import WALLET_QUERY_KEYS from '@/features/wallet/constants/query-key';

import ORDER_QUERY_KEYS from '@/features/order/constants/query-key';
import order from '@/features/order/apis/bff/order';
import type { OrderRequest } from '@/features/order/models/order-request';
import { OrderErrorCode } from '@/features/order/errors/order-error-code';

interface UseOrderParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useLogin = ({ onSuccess, onError }: UseOrderParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orderRequest: OrderRequest) => {
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
      }

      onError?.(error);
    },
  });
};

export default useLogin;
