'use client';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-[#181818] text-white z-100">
      <div className="container mx-auto h-16 flex items-center justify-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} PepeCoinz. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 