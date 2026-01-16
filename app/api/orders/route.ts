import { NextRequest } from 'next/server';

import { bffHandler } from '@/shared/utils/bff';
import { parseJsonOrThrow } from '@/shared/utils/parser/request';
import { getTokenFromCookieOrThrow } from '@/shared/cookie/token';

import type { Order } from '@/features/order/models/order';
import type { OrderRequest } from '@/features/order/models/order-request';
import fetchMyOrders from '@/features/order/apis/server/fetch-my-orders';
import fetchOrder from '@/features/order/apis/server/fetch-order';

const myOrdersHandler = async (): Promise<Order[]> => {
  const storedToken = await getTokenFromCookieOrThrow();

  return await fetchMyOrders(storedToken);
};

const orderHandler = async (request: NextRequest): Promise<string> => {
  const storedToken = await getTokenFromCookieOrThrow();

  const requestBody = await parseJsonOrThrow<OrderRequest>(request);

  return await fetchOrder(requestBody, storedToken);
};

export const GET = bffHandler(myOrdersHandler);
export const POST = bffHandler(orderHandler);
