'use client';

import { cn } from '@/shared/utils/cn';

import type { OrderType } from '@/features/order/types/order.type';
import useOrderStore from '@/features/order/stores/useOrderStore';

interface OrderTypeButtonProps {
  orderType: OrderType;
}

const OrderTypeButton = ({ orderType }: OrderTypeButtonProps) => {
  const currentOrderType = useOrderStore((state) => state.orderType);
  const setOrderType = useOrderStore((state) => state.setOrderType);

  const isSelected = orderType === currentOrderType;
  const buttonColor = isSelected
    ? orderType === 'BUY'
      ? 'bg-red-500'
      : 'bg-blue-500'
    : 'bg-white';
  const textColor = isSelected
    ? 'text-white'
    : orderType === 'BUY'
      ? 'text-red-300'
      : 'text-blue-300';

  return (
    <button
      className={cn('w-full rounded-xl p-3 text-[1.25rem] font-bold', buttonColor, textColor)}
      type="button"
      onClick={() => setOrderType(orderType)}
    >
      {orderType === 'BUY' ? '살래요' : '팔래요'}
    </button>
  );
};

export default OrderTypeButton;
