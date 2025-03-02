import { WalletCard } from '@/features/wallet/components/WalletCard';

export default function WalletPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Wallet</h1>
      <WalletCard address="0x123...789" />
    </main>
  );
} 