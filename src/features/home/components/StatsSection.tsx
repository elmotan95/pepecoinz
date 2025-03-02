'use client';

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">$10M+</h3>
            <p className="text-gray-600">Total Volume</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">100K+</h3>
            <p className="text-gray-600">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
} 