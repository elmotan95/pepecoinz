'use client';

import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
            Overview
          </Link>
          <Link href="/dashboard/wallet" className="block py-2 px-4 rounded hover:bg-gray-700">
            Wallet
          </Link>
          <Link href="/dashboard/transactions" className="block py-2 px-4 rounded hover:bg-gray-700">
            Transactions
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
} 