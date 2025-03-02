import { BalanceCalculator } from '@/features/balance/components/BalanceCalculator';

export const metadata = {
  title: 'Balance Calculator - PepeCoinz',
  description: 'Calculate your PepeCoinz balance in USD and IDR',
};

export default function BalancePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <BalanceCalculator />
    </main>
  );
} 