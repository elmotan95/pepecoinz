import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/components/Header/Header";
import { Footer } from "@/shared/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PepeCoinz",
  description: "The most memeable DeFi platform",
  keywords: "crypto, defi, pepe, meme coins",
  authors: [{ name: "PepeCoinz Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Global Navigation */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
