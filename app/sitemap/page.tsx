'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// 클라이언트 컴포넌트에서는 metadata를 export할 수 없으므로 제거

export default function SitemapPage() {
  // 메인 페이지 목록 - 앵커 링크로 구성
  const mainPages = [
    {
      name: '홈',
      href: '/',
      description: '메인 페이지 - 빅데이터 분석 과정 소개',
    },
    {
      name: '과정소개',
      href: '/#course',
      description: '빅데이터 분석 과정 상세 소개',
    },
    {
      name: '커리큘럼',
      href: '/#curriculum',
      description: '단계별 상세 커리큘럼 안내',
    },
    {
      name: '수강혜택',
      href: '/#benefits',
      description: '수강생 혜택 및 지원사항',
    },
    {
      name: '수강후기',
      href: '/#reviews',
      description: '수강생 후기 및 성공사례',
    },
    {
      name: '수강안내',
      href: '/#info',
      description: '수강 신청 및 안내사항',
    },
    {
      name: '오시는길',
      href: '/#location',
      description: '학원 위치 및 교통편 안내',
    },
    {
      name: '상담신청',
      href: '/#contact',
      description: '무료 상담 신청 및 문의',
    },
  ];

  // 법적 고지 페이지 목록
  const legalPages = [
    {
      name: '개인정보처리방침',
      href: '/privacy',
      description: '개인정보 보호정책 및 처리방침',
    },
    {
      name: '이용약관',
      href: '/terms',
      description: '서비스 이용약관 및 정책',
    },
  ];

  // 앵커 링크 스크롤 함수 - 클라이언트 사이드에서만 실행
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // 홈페이지로 이동 후 스크롤
      if (
        href === '/#contact' ||
        href === '/#course' ||
        href === '/#curriculum' ||
        href === '/#benefits' ||
        href === '/#reviews' ||
        href === '/#info' ||
        href === '/#location'
      ) {
        window.location.href = href;
      }
    }
  };

  return (
    <div className='min-h-screen '>
      <div className='container mx-auto px-4 py-20'>
        {/* 뒤로가기 버튼 */}
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200'
          >
            <ArrowLeft size={20} />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>
        {/* 헤더 섹션 */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            사이트맵
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            한국산업인재육성학원 사이트의 모든 페이지를 한눈에 확인하세요
          </p>
        </div>

        {/* 메인 페이지 섹션 */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-white mb-6 border-b border-blue-500 pb-2'>
            주요 페이지
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {mainPages.map(page => (
              <Link
                key={page.href}
                href={page.href}
                onClick={e => scrollToSection(e, page.href)}
                className='group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105'
              >
                <h3 className='text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2'>
                  {page.name}
                </h3>
                <p className='text-gray-300 text-sm'>{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* 법적 페이지 섹션 */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-white mb-6 border-b border-blue-500 pb-2'>
            법적 고지
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {legalPages.map(page => (
              <Link
                key={page.href}
                href={page.href}
                className='group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105'
              >
                <h3 className='text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2'>
                  {page.name}
                </h3>
                <p className='text-gray-300 text-sm'>{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* 연락처 정보 섹션 */}
        <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold text-white mb-4'>문의하기</h2>
          <p className='text-gray-300 mb-6'>
            궁금한 점이 있으시면 언제든지 연락주세요
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='tel:053-818-5677'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
            >
              📞 053-818-5677
            </Link>
            <Link
              href='/#contact'
              onClick={e => scrollToSection(e, '/#contact')}
              className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
            >
              💬 무료 상담신청
            </Link>
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className='mt-12 text-center'>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-lg font-semibold text-white mb-2'>
              한국산업인재육성학원
            </h3>
            <p className='text-gray-300 text-sm mb-2'>
              대구 회계·세무·컴퓨터학원
            </p>
            <p className='text-gray-400 text-xs'>
              경북 경산시 조영길 18-18(조영동), 1층 [38541]
            </p>
            <p className='text-gray-400 text-xs mt-1'>
              사업자번호: 537-82-00231 | 대표자: 김태성
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
