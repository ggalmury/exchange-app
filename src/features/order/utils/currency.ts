import type { OrderType } from '@/features/order/types/order.type';

export const getFromCurrency = (orderType: OrderType, currency: string): string => {
  return orderType === 'BUY' ? 'KRW' : currency;
};

export const getToCurrency = (orderType: OrderType, currency: string): string => {
  return orderType === 'BUY' ? currency : 'KRW';
};
