import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '한국산업인재육성학원',
  description:
    '대구 회계·세무·컴퓨터학원 POWER BI 기반의 재무빅데이터 분석사 사무관리원 양성과정 안내 사이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' data-scroll-behavior='smooth'>
      <body
        className={notoSansKr.className}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621198777376-d776b7725a93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735')",
          backgroundAttachment: 'fixed', // 배경 이미지 고정
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-black/50' />
        {/* 고정된 글로우 효과들 - 홈페이지 전반에 걸쳐 고정 */}
        <div className='fixed top-0 right-0 w-[600px] h-[600px] bg-purple-600/50 rounded-full blur-[150px] animate-pulse z-0' />
        <div className='fixed top-20 right-20 w-[400px] h-[400px] bg-blue-500/40 rounded-full blur-[120px] animate-pulse delay-1000 z-0' />
        <div className='fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[130px] animate-pulse delay-500 z-0' />

        {/* 고정된 장식 요소 - 작은 별들 */}
        <div className='fixed top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse z-0' />
        <div className='fixed top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-300 z-0' />
        <div className='fixed bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse delay-700 z-0' />
        <div className='fixed top-2/3 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-pulse delay-1000 z-0' />

        <div className='flex min-h-screen flex-col relative z-10'>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
