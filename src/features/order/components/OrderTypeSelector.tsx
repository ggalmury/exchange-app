'use client';

import OrderTypeButton from '@/features/order/components/OrderTypeButton';

const OrderTypeSelector = () => {
  return (
    <div className="flex gap-4 rounded-2xl border border-gray-300 bg-white p-3">
      <OrderTypeButton orderType="BUY" />

      <OrderTypeButton orderType="SELL" />
    </div>
  );
};

export default OrderTypeSelector;
