import type { OrderType } from '@/features/order/types/order.type';

const ORDER_QUERY_KEYS = {
  MY: ['order', 'my'],
  QUOTE: (orderType: OrderType, amount: number, exchangeRateId?: number, currency?: string) => [
    'order',
    'quote',
    `${orderType}-${amount}-${exchangeRateId}-${currency}`,
  ],
} as const;

export default ORDER_QUERY_KEYS;
