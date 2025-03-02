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
          
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex gap-6">
              <Link href="/" className="text-green-600 hover:text-green-800">
                Home
              </Link>
              <Link href="/balance" className="text-green-600 hover:text-green-800">
                Balance Calculator
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 ml-6 border-l border-gray-700 pl-6">
              <a 
                href="http://reddit.com/r/pepecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 inline-flex items-center"
                title="Reddit Community"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508 0 .922-.412.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c0-.509-.414-.919-.923-.919-.508 0-.922.41-.922.919 0 .506.414.918.922.918.509 0 .923-.412.923-.918z"/>
                </svg>
              </a>
              <a 
                href="https://coinmarketcap.com/currencies/pepecoin-org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-2 py-1 text-green-600 hover:text-green-800 font-bold text-sm rounded hover:bg-green-600/10 transition-colors"
                title="CoinMarketCap"
              >
                CMC
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 