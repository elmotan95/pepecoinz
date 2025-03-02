import { HeroSection } from '@/features/home/components/HeroSection';
import { StatsSection } from '@/features/home/components/StatsSection';
import { BalanceCalculatorWidget } from '@/features/balance/components/BalanceCalculatorWidget';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <BalanceCalculatorWidget />
    </main>
  );
}
