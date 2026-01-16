import PageTitle from '@/components/PageTitle';

import ExchangeRateSection from '@/features/exchange-rate/components/ExchangeRateSection';
import MyWalletSection from '@/features/wallet/components/MyWalletSection';
import OrderSection from '@/features/order/components/OrderSection';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <PageTitle title="환율 정보" subTitle="실시간 환율을 확인하고 간편하게 환전하세요." />

      <div className="flex min-h-196 w-full gap-8">
        <div className="flex flex-col gap-8">
          <ExchangeRateSection />

          <MyWalletSection />
        </div>

        <OrderSection />
      </div>
    </div>
  );
};

export default HomePage;
