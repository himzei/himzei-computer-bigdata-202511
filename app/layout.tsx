import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import CookieConsent from './_components/CookieConsent';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: '한국산업인재육성학원 | 대구 회계·세무·컴퓨터학원',
    template: '%s | 한국산업인재육성학원',
  },
  description:
    '대구 최고의 회계·세무·컴퓨터학원. POWER BI 기반 재무빅데이터 분석사, 사무관리원 양성과정. 실무 중심 교육으로 취업률 95% 달성. 경산시 조영동 소재.',
  keywords: [
    '대구 학원',
    '회계학원',
    '세무학원',
    '컴퓨터학원',
    'POWER BI',
    '재무빅데이터',
    '빅데이터 분석사',
    '사무관리원',
    '취업교육',
    '경산 학원',
    '한국산업인재육성학원',
  ],
  authors: [{ name: '한국산업인재육성학원' }],
  creator: '한국산업인재육성학원',
  publisher: '한국산업인재육성학원',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kihd.ac.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://kihd.ac.kr',
    siteName: '한국산업인재육성학원',
    title: '한국산업인재육성학원 | 대구 회계·세무·컴퓨터학원',
    description:
      '대구 최고의 회계·세무·컴퓨터학원. POWER BI 기반 재무빅데이터 분석사, 사무관리원 양성과정. 실무 중심 교육으로 취업률 95% 달성.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: '한국산업인재육성학원 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '한국산업인재육성학원 | 대구 회계·세무·컴퓨터학원',
    description:
      '대구 최고의 회계·세무·컴퓨터학원. POWER BI 기반 재무빅데이터 분석사, 사무관리원 양성과정.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console에서 발급받은 코드로 교체 필요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='scroll-smooth' data-scroll-behavior='smooth'>
      <body
        className={notoSansKr.className}
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
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

        {/* 맨 위로 이동 버튼 */}
        <ScrollToTop />

        {/* 쿠키 동의 배너 */}
        <CookieConsent />
      </body>
    </html>
  );
}
