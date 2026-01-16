import type { Result } from '@/shared/models/result';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';

import type { OrderRequest } from '@/features/order/models/order-request';

const order = async (body: OrderRequest): Promise<Result<string>> => {
  const endpoint = '/orders';

  return await bffFetcher<string>({
    endpoint,
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify(body),
  });
};

export default order;
