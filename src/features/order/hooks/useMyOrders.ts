import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import ORDER_QUERY_KEYS from '@/features/order/constants/query-key';
import getMyOrders from '@/features/order/apis/bff/get-my-orders';
import type { Order } from '@/features/order/models/order';

const useMyOrders = () => {
  return useQuery<Order[]>({
    queryKey: ORDER_QUERY_KEYS.MY,
    queryFn: async () => {
      const result = await getMyOrders();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
  });
};

export default useMyOrders;
