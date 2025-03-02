import { WalletTransaction } from '../types';

// This would typically use axios or fetch to call your backend
export const walletApi = {
  getBalance: async (address: string): Promise<number> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Fetching balance for address: ${address}`);
    return 1000; // Mock balance
  },

  getTransactions: async (address: string): Promise<WalletTransaction[]> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Fetching transactions for address: ${address}`);
    return [
      {
        hash: `0x${address.substring(2, 6)}...`,  // Use part of the address in the hash
        amount: 100,
        timestamp: Date.now(),
        type: 'receive'
      }
    ];
  }
}; 