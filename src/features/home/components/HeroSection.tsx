'use client';

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-900 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to PepeCoinz
          </h1>
          <p className="text-xl mb-8">
            Guide to your Pepe (PEP) coin journey.
          </p>
          {/* <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-full">
            Start Trading
          </button> */}
        </div>
      </div>
    </section>
  );
} 