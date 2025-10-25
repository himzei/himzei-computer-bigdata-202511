import Courses from './_components/Courses';
import Hero from './_components/Hero';
import Benefits from './_components/Benefits';
import Testimonials from './_components/Testimonials';
import CourseInfo from './_components/CourseInfo';
import Location from './_components/Location';
import ContactForm from './_components/ContactForm';
import Curriculumn from './_components/Curriculumn';
import StructuredData from './_components/StructuredData';
import type { Metadata } from 'next';

// 메인 페이지 메타데이터 정의
export const metadata: Metadata = {
  title: '한국산업인재육성학원 | 대구 POWER BI 빅데이터 분석 교육',
  description:
    '대구 경산시 조영동 위치. POWER BI 기반 재무빅데이터 분석사 과정 운영. 취업률 95%, 정부지원금 최대 100% 지원. 6개월 과정으로 재무분석가, 데이터 분석가 취업 준비. 무료 상담 053-818-5677',
  keywords: [
    '대구 학원',
    'POWER BI 교육',
    '빅데이터 분석',
    '재무분석가',
    '데이터 분석가',
    '한국산업인재육성학원',
    '경산시 조영동',
    '정부지원금',
    '취업률 95%',
    '컴퓨터학원',
    '회계학원',
    '세무학원',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '한국산업인재육성학원 | 대구 POWER BI 빅데이터 분석 교육',
    description:
      '대구 경산시 조영동 위치. POWER BI 기반 재무빅데이터 분석사 과정 운영. 취업률 95%, 정부지원금 최대 100% 지원. 6개월 과정으로 재무분석가, 데이터 분석가 취업 준비.',
    url: 'https://himzei.com',
    type: 'website',
    siteName: '한국산업인재육성학원',
    images: [
      {
        url: 'https://himzei.com/images/bigdata.webp',
        width: 1200,
        height: 630,
        alt: 'POWER BI 빅데이터 분석 교육 과정',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '한국산업인재육성학원 | 대구 POWER BI 빅데이터 분석 교육',
    description:
      '대구 경산시 조영동 위치. POWER BI 기반 재무빅데이터 분석사 과정 운영. 취업률 95%, 정부지원금 최대 100% 지원.',
    images: ['https://himzei.com/images/bigdata.webp'],
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
    google: 'your-google-verification-code', // 실제 구글 검증 코드로 교체 필요
  },
};

export default function Home() {
  return (
    <div>
      {/* 구조화된 데이터 추가 */}
      <StructuredData type='organization' />
      <StructuredData type='course' />

      <Hero />
      <Courses />
      <Curriculumn />
      <Benefits />
      <Testimonials />
      <CourseInfo />
      <Location />
      <ContactForm />
    </div>
  );
}
