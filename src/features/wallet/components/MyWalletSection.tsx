'use client';

import MyAssetRow from '@/features/wallet/components/MyAssetRow';
import useMyWallet from '@/features/wallet/hooks/useMyWallet';

const MyWalletSection = () => {
  const { data: walletOverview, isLoading, isError, error } = useMyWallet();

  if (isLoading) return null;
  if (isError) throw error;
  if (!walletOverview) return null;

  const { totalKrwBalance, wallets } = walletOverview;

  return (
    <div className="flex flex-1 flex-col gap-8 rounded-xl border border-gray-300 bg-gray-50 px-8 py-6">
      <p className="text-2xl font-extrabold text-gray-800">내 지갑</p>

      <div className="flex flex-col gap-2">
        {wallets.map((wallet) => {
          return <MyAssetRow key={`my-asset-${wallet.currency}`} wallet={wallet} />;
        })}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-gray-300 pt-4 text-[1.25rem]">
        <span className="font-medium text-gray-600">총 보유 자산</span>

        <span className="font-bold text-blue-500">₩ {totalKrwBalance.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default MyWalletSection;
