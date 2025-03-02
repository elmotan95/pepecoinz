'use client';

import { BalanceCalculator } from './BalanceCalculator';

export function BalanceCalculatorWidget() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Quick Balance Calculator
        </h2>
        <BalanceCalculator />
      </div>
    </section>
  );
} 