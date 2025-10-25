'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { calculateCountdown, DEFAULT_TARGET_DATE } from '@/lib/countdown';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(
    calculateCountdown(DEFAULT_TARGET_DATE)
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 실시간 카운트다운 업데이트
  useEffect(() => {
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
      {/* 빅데이터 이미지 */}
      <div className='absolute top-24 right-28'>
        <Image
          className='z-10 animate-float-gentle'
          src='/images/bigdata.png'
          alt='bigdata'
          width={700}
          height={700}
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
            {/* 긴급성 메시지 */}
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-white px-6 py-3 rounded-full font-semibold animate-pulse'>
              <Sparkles className='w-5 h-5 text-yellow-300' />
              <span>
                🔥 11월 정규반 모집 중 - 선착순 10명!{' '}
                <span className='text-yellow-300'>
                  D-{countdown.displayText}
                </span>
              </span>
            </div>
            {/* 메인 헤드라인 - 큰 텍스트 */}
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight'>
              <span className='block mb-4'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400'>
                  취업스펙! 지금이 기회!!
                </span>
              </span>
              <span className='block'>재무빅데이터 분석사 양성과정</span>
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
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/60 hover:text-white animate-bounce cursor-pointer transition-colors duration-300'
        aria-label='아래로 스크롤'
      >
        <div className='flex flex-col items-center space-y-2'>
          <span className='text-sm tracking-widest'>SCROLL</span>
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </button>
    </section>
  );
}
