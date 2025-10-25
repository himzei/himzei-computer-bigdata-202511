'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치 감지 함수
  const toggleVisibility = () => {
    // 300px 이상 스크롤했을 때 버튼 표시
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', toggleVisibility);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 group min-w-[48px] min-h-[48px] flex items-center justify-center' // 접근성: 최소 48px 터치 영역 보장 및 gradient 수정
          aria-label='페이지 맨 위로 이동' // 접근성: 더 명확한 라벨 제공
          title='맨 위로 이동'
        >
          <ChevronUp
            size={20}
            className='sm:w-6 sm:h-6 group-hover:animate-bounce'
          />
        </button>
      )}
    </>
  );
}
