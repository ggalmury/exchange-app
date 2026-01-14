import type { Wallet } from '@/features/wallet/models/wallet';
import { currencySymbol } from '@/shared/constants/currency';

interface MyAssetRowProps {
  wallet: Wallet;
}

const MyAssetRow = ({ wallet }: MyAssetRowProps) => {
  const { currency, balance } = wallet;

  return (
    <div className="flex items-center justify-between text-[1.25rem] text-gray-600">
      <p className="font-medium">{currency}</p>

      <p className="font-semibold">
        {currencySymbol[currency]} {balance.toLocaleString()}
      </p>
    </div>
  );
};

export default MyAssetRow;
