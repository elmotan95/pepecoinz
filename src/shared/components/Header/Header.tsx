'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-[#181818] shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-green-600">
            PepeCoinz
          </Link>
          
          <div className="flex gap-6">
            {/* <Link href="/" className="text-green-600 hover:text-green-800">
              Home
            </Link> */}
            {/* <Link href="/wallet" className="text-green-600 hover:text-green-800">
              Balance Calculator
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
} 