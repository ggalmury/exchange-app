import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/models/result';

import type { WalletOverview } from '@/features/wallet/models/wallet.overview';

const getMyWallet = async (): Promise<Result<WalletOverview>> => {
  const endpoint = '/wallets';

  return await bffFetcher<WalletOverview>({
    endpoint,
    method: 'GET',
  });
};

export default getMyWallet;
