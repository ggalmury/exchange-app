import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { OrderRequest } from '@/features/order/models/order-request';

const fetchOrder = async (body: OrderRequest, token: string): Promise<string> => {
  const endpoint = '/orders';

  return await apiFetcher<string>({
    endpoint,
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify(body),
    token,
  });
};

export default fetchOrder;
