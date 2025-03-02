'use client';

import { useState } from 'react';
import { usePepeStats, formatHashrate } from '../hooks/usePepestats';

export function StatsSection() {
  const [showGigaHash, setShowGigaHash] = useState(false);
  const { stats, isLoading } = usePepeStats();

  const toggleHashrateUnit = () => {
    setShowGigaHash(!showGigaHash);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {isLoading ? 'Loading...' : `${stats.supply} PEPE`}
            </h3>
            <p className="text-gray-600">Circulating Supply</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {isLoading ? 'Loading...' : (stats.price === '0.00000000' ? 'N/A' : `$${stats.price}`)}
            </h3>
            <p className="text-gray-600">Current Price</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 
              className="text-2xl font-bold text-gray-800 mb-2 cursor-pointer hover:text-gray-600 transition-colors"
              onClick={toggleHashrateUnit}
              title="Click to toggle between PH/s and GH/s"
            >
              {isLoading ? 'Loading...' : formatHashrate(stats.hashrate, showGigaHash)}
            </h3>
            <p className="text-gray-600">Network Hashrate</p>
          </div>
        </div>
      </div>
    </section>
  );
} 