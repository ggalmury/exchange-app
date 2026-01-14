import ExchangeRateSection from '@/features/exchange-rate/components/ExchangeRateSection';
import MyWalletSection from '@/features/wallet/components/MyWalletSection';
import OrderSection from '@/features/order/components/OrderSection';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col">
        <p className="text-[2.5rem] font-bold text-gray-800">환율 정보</p>
        <p className="text-xl text-gray-700">실시간 환율을 확인하고 간편하게 환전하세요.</p>
      </div>

      <div className="flex min-h-196.75 w-full gap-8">
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
