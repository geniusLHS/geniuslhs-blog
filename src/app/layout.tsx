import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "geniusLHS",
  description: "Dev blog of geniusLHS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
        <meta property="og:url" content="https://geniuslhs.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="geniusLHS" />
        <meta property="og:title" content="geniusLHS" />
        <meta property="og:description" content="My Projects, Blog, Activities" />
        <meta property="og:image" content="https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true" />
        <meta name="naver-site-verification" content="bc90d4564371f74400036d44cae6222db667a628" />
      </head>
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
