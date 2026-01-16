import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import type { WalletOverview } from '@/features/wallet/models/wallet.overview';
import WALLET_QUERY_KEYS from '@/features/wallet/constants/query-key';
import getMyWallet from '@/features/wallet/apis/bff/get-my-wallet';

const useMyWallet = () => {
  return useQuery<WalletOverview>({
    queryKey: WALLET_QUERY_KEYS.MY,
    queryFn: async () => {
      const result = await getMyWallet();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
  });
};

export default useMyWallet;
