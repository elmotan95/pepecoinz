import { WalletTransaction } from '../types';

// This would typically use axios or fetch to call your backend
export const walletApi = {
  getBalance: async (address: string): Promise<number> => {
    const apiUrl = `https://pepeblocks.com/api/v2/address/${address}`;
    console.log(`Fetching balance for address: ${address} from ${apiUrl}`);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorMsg = `Error fetching balance: ${response.status} ${response.statusText}`;
        console.error(errorMsg);
        throw new Error(errorMsg);
      }

      const data = await response.json();

      // Try to find balance or confirmedBalance
      let balanceValue = data.balance;
      if (balanceValue === undefined && data.confirmedBalance !== undefined) {
        balanceValue = data.confirmedBalance;
      }

      if (balanceValue === undefined) {
        const errorMsg = "Balance data not found in API response";
        console.error(errorMsg, data);
        throw new Error(errorMsg);
      }

      const balance = parseFloat(balanceValue);
      if (isNaN(balance)) {
        const errorMsg = `Invalid balance value: ${balanceValue}`;
        console.error(errorMsg);
        throw new Error(errorMsg);
      }
      return balance;
    } catch (error) {
      console.error('Failed to get balance:', error);
      // Depending on requirements, either re-throw or return a default/error indicator
      // For now, re-throwing the error as the function expects a Promise<number>
      // and callers should handle potential failures.
      throw error;
    }
  },

  getTransactions: async (address: string): Promise<WalletTransaction[]> => {
    const apiUrl = `https://pepeblocks.com/api/v2/address/${address}`;
    console.log(`Fetching transactions for address: ${address} from ${apiUrl}`);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorMsg = `Error fetching transactions: ${response.status} ${response.statusText}`;
        console.error(errorMsg);
        // Depending on requirements, could throw or return empty
        // For now, let's align with getBalance and throw.
        throw new Error(errorMsg);
      }

      const data = await response.json();

      if (!data.transactions || !Array.isArray(data.transactions)) {
        console.log('No transactions array found in API response or it is not an array, returning empty.');
        return [];
      }

      const walletTransactions: WalletTransaction[] = data.transactions.map((tx: any) => {
        let valueReceived = 0;
        tx.vout.forEach((output: any) => {
          if (output.addresses && output.addresses.includes(address)) {
            valueReceived += parseFloat(output.value);
          }
        });

        let valueSent = 0;
        tx.vin.forEach((input: any) => {
          // Check if input.addresses exists, as it might not for all inputs (e.g., coinbase)
          if (input.addresses && input.addresses.includes(address)) {
            valueSent += parseFloat(input.value);
          }
        });

        const netAmount = valueReceived - valueSent;

        if (netAmount > 0) {
          return {
            hash: tx.txid,
            amount: netAmount, // Assuming API value is in the desired main unit
            timestamp: tx.blockTime,
            type: 'receive',
          };
        } else if (netAmount < 0) {
          return {
            hash: tx.txid,
            amount: -netAmount, // Amount should be positive
            timestamp: tx.blockTime,
            type: 'send',
          };
        }
        return null; // Will be filtered out
      }).filter((tx: WalletTransaction | null): tx is WalletTransaction => tx !== null);

      return walletTransactions;

    } catch (error) {
      console.error('Failed to get transactions:', error);
      // Re-throw the error for the caller to handle
      throw error;
    }
  }
}; 