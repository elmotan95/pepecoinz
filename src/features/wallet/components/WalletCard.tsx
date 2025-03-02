'use client';

import { useWalletBalance } from '../hooks/useWalletBalance';

interface WalletCardProps {
  address: string;
}

export function WalletCard({ address }: WalletCardProps) {
  const { balance, isLoading } = useWalletBalance(address);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Wallet</h3>
      <p className="text-gray-600">{address}</p>
      <p className="text-2xl font-bold mt-2">{balance} PEPE</p>
    </div>
  );
} 