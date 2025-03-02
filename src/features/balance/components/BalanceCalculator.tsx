'use client';

import { useState, useEffect } from 'react';
import { usePepeStats } from '../../home/hooks/usePepestats';

export function BalanceCalculator() {
  const { stats, isLoading } = usePepeStats();
  const [pepAmount, setPepAmount] = useState('');
  const [usdValue, setUsdValue] = useState('0');
  const [idrValue, setIdrValue] = useState('0');

  // Fetch current USD to IDR exchange rate
  const [usdToIdr] = useState(16500); // Default fallback rate

  useEffect(() => {
    // Update values whenever PEP amount or price changes
    if (pepAmount && stats.price) {
      const pepValue = parseFloat(pepAmount);
      const pepPrice = parseFloat(stats.price.replace(/[^0-9.]/g, ''));
      
      if (!isNaN(pepValue) && !isNaN(pepPrice)) {
        const usdTotal = pepValue * pepPrice;
        setUsdValue(usdTotal.toFixed(2));
        setIdrValue((usdTotal * usdToIdr).toFixed(2));
      }
    }
  }, [pepAmount, stats.price, usdToIdr]);

  const handlePepAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) { // Allow only numbers and decimal point
      setPepAmount(value);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#222222] rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-6">Balance Calculator</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="pep-amount" className="block text-sm font-medium text-gray-300 mb-2">
            PEP Amount
          </label>
          <div className="relative">
            <input
              id="pep-amount"
              type="text"
              value={pepAmount}
              onChange={handlePepAmountChange}
              className="w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent text-white"
              placeholder="Enter PEP amount"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Current PEP Price: {stats.price} USD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#181818] p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-400 mb-1">USD Value</h3>
            <p className="text-xl font-bold text-white">
              ${usdValue}
            </p>
          </div>

          <div className="bg-[#181818] p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-400 mb-1">IDR Value</h3>
            <p className="text-xl font-bold text-white">
              Rp {new Intl.NumberFormat('id-ID').format(parseFloat(idrValue))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 