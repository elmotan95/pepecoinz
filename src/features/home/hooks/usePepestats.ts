import { useState, useEffect } from 'react';

export interface PepeStats {
  supply: string;
  price: string;
  hashrate: number;
  difficulty: number;
  connections: number;
  blockcount: number;
}

interface SummaryResponse {
  difficulty: number;
  supply: number;
  hashrate: number;
  last_price_usd: number;
  last_price_usdt: number;
  connections: number;
  blockcount: number;
}

export function formatNumber(num: number): string {
  if (!isFinite(num) || isNaN(num)) return '0';
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B+`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M+`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K+`;
  }
  return num.toFixed(2);
}

export function formatPrice(price: number): string {
  if (!isFinite(price) || isNaN(price)) return '0.00000000';
  return price.toFixed(8);
}

export function formatHashrate(hashrate: number, showGiga: boolean = false): string {
  if (!isFinite(hashrate) || isNaN(hashrate)) return '0 H/s';
  
  if (showGiga) {
    // Convert to GH/s
    return `${(hashrate / 1000000000).toFixed(2)} GH/s`;
  } else {
    // Convert to PH/s
    return `${(hashrate / 1000000000000000).toFixed(2)} PH/s`;
  }
}

interface UsePepeStatsResult {
  stats: PepeStats;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function usePepeStats(refreshInterval = 30000): UsePepeStatsResult {
  const [stats, setStats] = useState<PepeStats>({
    supply: '0',
    price: '0',
    hashrate: 0,
    difficulty: 0,
    connections: 0,
    blockcount: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStats = async () => {
    try {
      setError(null);
      const response = await fetch('https://pepeblocks.com/ext/getsummary');
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      
      const data: SummaryResponse = await response.json();

      // Ensure we have valid numbers before formatting
      const supply = Number(data.supply) || 0;
      const price = Number(data.last_price_usd) || 0;
      const hashrate = Number(data.hashrate) || 0;

      setStats({
        supply: formatNumber(supply),
        price: formatPrice(price),
        hashrate: hashrate,
        difficulty: data.difficulty,
        connections: data.connections,
        blockcount: data.blockcount,
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      setStats({
        supply: '0',
        price: '0',
        hashrate: 0,
        difficulty: 0,
        connections: 0,
        blockcount: 0,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();

    if (refreshInterval > 0) {
      const interval = setInterval(fetchStats, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  return {
    stats,
    isLoading,
    error,
    refetch: fetchStats,
  };
} 