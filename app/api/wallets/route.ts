import { bffHandler } from '@/shared/utils/bff';
import { getTokenFromCookieOrThrow } from '@/shared/cookie/token';

import type { WalletOverview } from '@/features/wallet/models/wallet.overview';
import fetchMyWallet from '@/features/wallet/apis/server/fetch-my-wallet';

const myWalletHandler = async (): Promise<WalletOverview> => {
  const storedToken = await getTokenFromCookieOrThrow();

  return await fetchMyWallet(storedToken);
};

export const GET = bffHandler(myWalletHandler);
