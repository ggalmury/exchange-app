import MyOrderListSection from '@/features/order/components/MyOrderListSection';

const OrdersPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col">
        <p className="text-[2.5rem] font-bold text-gray-800">환전 내역</p>
        <p className="text-xl text-gray-700">환전 내역을 확인하실 수 있어요.</p>
      </div>

      <MyOrderListSection />
    </div>
  );
};

export default OrdersPage;
