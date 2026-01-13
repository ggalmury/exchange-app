import { createBffHandler } from '@/shared/utils/bff';
import { getTokenFromCookieOrThrow } from '@/shared/cookie/token';

import fetchMyWallet from '@/features/wallet/apis/server/fetch-my-wallet';
import type { WalletOverview } from '@/features/wallet/models/wallet.overview';

const myWalletHandler = async (): Promise<WalletOverview> => {
  const storedToken = await getTokenFromCookieOrThrow();

  return await fetchMyWallet(storedToken);
};

export const GET = createBffHandler(myWalletHandler);
