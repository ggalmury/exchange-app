import type { Wallet } from '@/features/wallet/models/wallet';

export interface WalletOverview {
  totalKrwBalance: number;
  wallets: Wallet[];
}
