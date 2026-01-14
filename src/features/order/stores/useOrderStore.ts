import { create } from 'zustand';

import type { OrderType } from '@/features/order/types/order.type';

interface OrderState {
  exchangeRateId?: number;
  currency?: string;
  orderType: OrderType;
  amount: number;

  setCurrency: (exchangeRateId: number, currency: string) => void;
  setOrderType: (orderType: OrderType) => void;
  setAmount: (amount: number) => void;
}

const useOrderStore = create<OrderState>((set) => ({
  exchangeRateId: undefined,
  currency: undefined,
  orderType: 'BUY',
  amount: 0,

  setCurrency: (exchangeRateId: number, currency: string) =>
    set(() => ({ exchangeRateId, currency })),
  setOrderType: (orderType: OrderType) => set(() => ({ orderType })),
  setAmount: (amount: number) => set(() => ({ amount })),
}));

export default useOrderStore;
