import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { WalletOverview } from '@/features/wallet/models/wallet.overview';

const fetchMyWallet = async (token: string): Promise<WalletOverview> => {
  const endpoint = '/wallets';

  return await apiFetcher<WalletOverview>({
    endpoint,
    method: 'GET',
    token,
  });
};

export default fetchMyWallet;
