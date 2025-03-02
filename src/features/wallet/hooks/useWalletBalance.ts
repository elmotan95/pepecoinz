'use client';

import { useState, useEffect } from 'react';
import { walletApi } from '../api/walletApi';

export function useWalletBalance(address: string) {
  const [balance, setBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const result = await walletApi.getBalance(address);
        setBalance(result);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBalance();
  }, [address]);

  return { balance, isLoading };
} 