'use client';

import { format } from 'date-fns';

import useMyOrders from '@/features/order/hooks/useMyOrders';

const MyOrderListSection = () => {
  const { data: myOrders, isLoading } = useMyOrders();

  if (isLoading) return null;
  if (!myOrders) return null;

  return (
    <section className="flex flex-col rounded-xl border border-gray-300 bg-white">
      <div className="w-full">
        <div className="grid grid-cols-[1fr_2fr_1.5fr_1.5fr_1.5fr] gap-4 border-b border-gray-200 px-8 py-4 text-sm text-gray-600">
          <p>거래 ID</p>
          <p>거래 일시</p>
          <p className="text-right">매수 금액</p>
          <p className="text-right">체결 환율</p>
          <p className="text-right">매도 금액</p>
        </div>

        <div className="flex flex-col">
          {myOrders.map((myOrder) => {
            const { orderId, fromAmount, toAmount, appliedRate, orderedAt } = myOrder;

            return (
              <div
                key={`my-order-${orderId}`}
                className="grid grid-cols-[1fr_2fr_1.5fr_1.5fr_1.5fr] items-center gap-4 px-8 py-5 text-sm text-gray-700"
              >
                <p>{orderId}</p>
                <p>{format(orderedAt, 'yyyy-MM-dd HH:mm:ss')}</p>
                <p className="text-right">{fromAmount.toLocaleString()}</p>
                <p className="text-right">{appliedRate}</p>
                <p className="text-right">{toAmount.toLocaleString()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyOrderListSection;
