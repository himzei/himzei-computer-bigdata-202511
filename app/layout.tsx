import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Sans_KR } from 'next/font/google';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "한국산업인재육성학원",
  description: "대구 회계·세무·컴퓨터학원 POWER BI 기반의 재무빅데이터 분석사 사무관리원 양성과정 안내 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={notoSansKr.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
