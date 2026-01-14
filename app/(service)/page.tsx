import ExchangeRateSection from '@/features/exchange-rate/components/ExchangeRateSection';
import MyWalletSection from '@/features/wallet/components/MyWalletSection';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col">
        <p className="text-[2.5rem] font-bold text-gray-800">환율 정보</p>
        <p className="text-xl text-gray-700">실시간 환율을 확인하고 간편하게 환전하세요.</p>
      </div>

      <div className="flex w-full gap-8">
        <div className="flex min-h-196.75 min-w-157 flex-col gap-8">
          <ExchangeRateSection />

          <MyWalletSection />
        </div>

        <section className="flex min-h-196.75 min-w-157 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-base font-semibold text-slate-800">
            <span>USD 환전하기</span>
            <span className="text-slate-400">⌄</span>
          </div>

          <div className="mt-4 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <button type="button" className="rounded-lg bg-rose-500 py-2 text-white shadow-sm">
                살래요
              </button>
              <button type="button" className="rounded-lg bg-white py-2 text-slate-400">
                팔래요
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">매수 금액</span>
              <span className="text-xs text-slate-400">30 달러 사기</span>
            </div>
            <div className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-500">
              입력해주세요
            </div>
            <div className="flex items-center justify-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                ⌄
              </span>
            </div>
            <div className="text-xs text-slate-400">필요 원화</div>
            <div className="rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-right text-sm text-slate-500">
              42,530 <span className="text-rose-500">원 필요해요</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500">
            <span>적용 환율</span>
            <span>1 USD = 1,320.50 원</span>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white"
          >
            환전하기
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
