import type { Result } from '@/shared/models/result';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';

import type { Order } from '@/features/order/models/order';

const getMyOrders = async (): Promise<Result<Order[]>> => {
  const endpoint = '/orders';

  return await bffFetcher<Order[]>({
    endpoint,
    method: 'GET',
  });
};

export default getMyOrders;
