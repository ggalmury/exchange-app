import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Order } from '@/features/order/models/order';

const fetchMyOrders = async (token: string): Promise<Order[]> => {
  const endpoint = '/orders';

  return await apiFetcher<Order[]>({
    endpoint,
    method: 'GET',
    token,
  });
};

export default fetchMyOrders;
