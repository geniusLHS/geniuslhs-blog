import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'geniusLHS',
  description: 'Dev blog of geniusLHS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="py-8 sm:py-12 font-sans px-4 bg-[#fdfdfd] min-h-screen">
          <div className="max-w-3xl mx-auto w-full">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
