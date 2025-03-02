export interface WalletInfo {
  address: string;
  balance: number;
  network: string;
}

export interface WalletTransaction {
  hash: string;
  amount: number;
  timestamp: number;
  type: 'send' | 'receive';
} 