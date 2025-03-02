import { WalletInfo, WalletTransaction } from '../types';

// This would typically use axios or fetch to call your backend
export const walletApi = {
  getBalance: async (address: string): Promise<number> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 1000; // Mock balance
  },

  getTransactions: async (address: string): Promise<WalletTransaction[]> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      {
        hash: '0x123...',
        amount: 100,
        timestamp: Date.now(),
        type: 'receive'
      }
    ];
  }
}; 