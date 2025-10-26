'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  calculateCountdown,
  getInitialCountdown,
  DEFAULT_TARGET_DATE,
} from '@/lib/countdown';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  // hydration 오류 방지를 위해 초기값은 일관된 값으로 설정
  const [countdown, setCountdown] = useState(
    getInitialCountdown(DEFAULT_TARGET_DATE)
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 클라이언트에서 hydration이 완료된 후에만 실시간 업데이트 시작
  useEffect(() => {
    setIsClient(true);

    // 첫 번째 업데이트는 즉시 실행 (정확한 시간으로)
    setCountdown(calculateCountdown(DEFAULT_TARGET_DATE));

    const timer = setInterval(() => {
      setCountdown(calculateCountdown(DEFAULT_TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#course');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative min-h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* 빅데이터 이미지 - Next.js Image 컴포넌트로 최적화 */}
      <div className='absolute top-24 right-28 z-10'>
        <Image
          className='animate-float-gentle'
          src='/images/bigdata.webp'
          alt='빅데이터 분석 교육 과정 이미지'
          width={700}
          height={700}
          priority={true} // LCP 최적화를 위해 우선 로딩
          fetchPriority='high' // 높은 우선순위로 로딩
          quality={90} // 고품질 유지 (메인 이미지이므로)
          placeholder='blur' // 로딩 중 블러 효과
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=' // 기본 블러 이미지
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className='relative z-10 h-full flex items-center justify-center mx-auto w-full '>
        <div className='container mx-auto px-4 max-w-6xl '>
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* 긴급성 메시지 - SEO 키워드 포함 */}
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-white px-6 py-3 rounded-full font-semibold animate-pulse'>
              <Sparkles className='w-5 h-5 text-yellow-300' />
              <span>
                🔥 경산 빅데이터학원 11월 정규반 모집 중 - 선착순 10명!{' '}
                <span className='text-yellow-300'>
                  D-{isClient ? countdown.displayText : '로딩 중...'}
                </span>
              </span>
            </div>
            {/* 메인 헤드라인 - SEO 최적화된 키워드 포함 */}
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight'>
              <span className='block mb-4'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400'>
                  영남대 빅데이터 교육! 지금이 기회!!
                </span>
              </span>
              <span className='block'>
                경산 컴활 학원 | 대구 경산 데이터분석
              </span>
            </h1>

            {/* CTA 버튼들 */}
            <div className='flex flex-col sm:flex-row gap-4 items-center pt-12'>
              <Link
                href='#contact'
                onClick={e => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50'
              >
                <span className='relative z-10'>무료 상담 신청하기</span>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </Link>

              <Link
                href='#curriculum'
                onClick={e => {
                  e.preventDefault();
                  document
                    .querySelector('#curriculum')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105'
              >
                커리큘럼 자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <button
        onClick={scrollToNextSection}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/60 hover:text-white animate-bounce cursor-pointer transition-colors duration-300 p-4 min-w-[44px] min-h-[44px] flex items-center justify-center' // 접근성: 최소 44px 터치 영역 보장
        aria-label='다음 섹션으로 스크롤' // 접근성: 더 명확한 라벨 제공
      >
        <div className='flex flex-col items-center space-y-2'>
          <span className='text-sm tracking-widest'>SCROLL</span>
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </button>
    </section>
  );
}
