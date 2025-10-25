'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // 쿠키 동의 상태 확인
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  // hydration 완료 전에는 렌더링하지 않음
  if (!isMounted || !showConsent) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div className='flex items-start space-x-3'>
            <div className='flex-shrink-0'>
              <Cookie className='w-6 h-6 text-blue-600' />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                쿠키 사용에 대한 안내
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed'>
                한국산업인재육성학원은 웹사이트의 기능 향상과 사용자 경험 개선을
                위해 필요한 쿠키만을 사용합니다. 개인정보는 수집하지 않으며,
                서드 파티 쿠키는 사용하지 않습니다.
              </p>
              <div className='mt-2 flex items-center space-x-1 text-xs text-gray-500'>
                <Shield className='w-3 h-3' />
                <span>개인정보보호법 준수</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-2 w-full md:w-auto'>
            <button
              onClick={handleDecline}
              className='px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors min-h-[44px] rounded-lg' // 접근성: 최소 44px 높이와 둥근 모서리 추가
              aria-label='쿠키 사용 거부' // 접근성: 명확한 라벨 제공
            >
              거부
            </button>
            <button
              onClick={handleAccept}
              className='px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]' // 접근성: 최소 44px 높이 보장
              aria-label='쿠키 사용 동의' // 접근성: 명확한 라벨 제공
            >
              동의
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
