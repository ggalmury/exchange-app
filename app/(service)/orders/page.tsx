import PageTitle from '@/components/PageTitle';

import MyOrderListSection from '@/features/order/components/MyOrderListSection';

const OrdersPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <PageTitle title="환전 내역" subTitle="환전 내역을 확인하실 수 있어요." />

      <MyOrderListSection />
    </div>
  );
};

export default OrdersPage;
