import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import CookieConsent from './_components/CookieConsent';
import Image from 'next/image';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: '경산 빅데이터학원 | 영남대 빅데이터 교육 | 컴활 1급 2급 학원',
    template: '%s | 한국산업인재육성학원',
  },
  description:
    '경산시 조영동 영남대 인근 빅데이터학원. 컴활 1급 2급, 빅데이터분석기사, 전산회계 자격증 취득. 영남대 빅데이터 교육, 경산 컴활 학원, 대구 경산 데이터분석 전문.',
  keywords: [
    // 최우선 타겟 키워드
    '경산 빅데이터학원',
    '영남대 빅데이터 교육',
    '경산 컴활 학원',
    '영남대 컴퓨터활용능력',
    '대구 경산 데이터분석',
    // 자격증 관련 키워드
    '컴활 1급 학원 경산',
    '컴활 2급 주말반 영남대',
    '빅데이터분석기사 학원',
    '전산회계 학원 경산',
    // 기존 키워드 유지
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
  metadataBase: new URL('https://himzei.com'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/api/rss',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://himzei.com',
    siteName: '한국산업인재육성학원',
    title: '경산 빅데이터학원 | 영남대 빅데이터 교육 | 컴활 1급 2급 학원',
    description:
      '경산시 조영동 영남대 인근 빅데이터학원. 컴활 1급 2급, 빅데이터분석기사, 전산회계 자격증 취득. 영남대 빅데이터 교육, 경산 컴활 학원, 대구 경산 데이터분석 전문.',
    images: [
      {
        url: '/images/logo.webp',
        width: 1200,
        height: 630,
        alt: '경산 빅데이터학원 - 영남대 빅데이터 교육',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '경산 빅데이터학원 | 영남대 빅데이터 교육 | 컴활 1급 2급 학원',
    description:
      '경산시 조영동 영남대 인근 빅데이터학원. 컴활 1급 2급, 빅데이터분석기사, 전산회계 자격증 취득.',
    images: ['/images/logo.webp'],
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
    google:
      process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code', // 환경변수에서 가져오거나 기본값 사용
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='scroll-smooth' data-scroll-behavior='smooth'>
      <head>
        <meta
          name='naver-site-verification'
          content='fd8b3c0d39bb12f3bbec626db06f0686bef6a34d'
        />
        <meta name='msvalidate.01' content='6E178A2F309CF6C06699A6C49170DFD4' />
        <link
          rel='alternate'
          type='application/rss+xml'
          title='한국산업인재육성학원 RSS 피드'
          href='/api/rss'
        />
      </head>
      <body className={notoSansKr.className}>
        {/* 배경 이미지를 Next.js Image 컴포넌트로 최적화 */}
        <div className='fixed inset-0 w-full h-full z-0'>
          <Image
            src='/images/hero-background.webp'
            alt='배경 이미지'
            fill
            priority={true} // LCP 최적화를 위해 우선 로딩
            fetchPriority='high' // 높은 우선순위로 로딩
            quality={85} // 적절한 품질로 파일 크기 최적화
            className='object-cover' // CSS의 background-size: cover와 동일
            style={{
              objectPosition: 'center', // CSS의 background-position: center와 동일
            }}
          />
        </div>
        <div className='absolute inset-0 bg-black/50 z-10' />
        {/* 고정된 글로우 효과들 - 홈페이지 전반에 걸쳐 고정 */}
        <div className='fixed top-0 right-0 w-[600px] h-[600px] bg-purple-600/50 rounded-full blur-[150px] animate-pulse z-20' />
        <div className='fixed top-20 right-20 w-[400px] h-[400px] bg-blue-500/40 rounded-full blur-[120px] animate-pulse delay-1000 z-20' />
        <div className='fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[130px] animate-pulse delay-500 z-20' />

        {/* 고정된 장식 요소 - 작은 별들 */}
        <div className='fixed top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse z-20' />
        <div className='fixed top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-300 z-20' />
        <div className='fixed bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse delay-700 z-20' />
        <div className='fixed top-2/3 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-pulse delay-1000 z-20' />

        <div className='flex min-h-screen flex-col relative z-30'>
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
