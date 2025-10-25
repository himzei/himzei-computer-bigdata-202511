import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='backdrop-blur-sm border-t border-white/20'>
      <div className='container mx-auto px-4 py-6 sm:py-8'>
        {/* 메인 Footer 콘텐츠 */}
        <div className='flex flex-col gap-6 sm:gap-4'>
          {/* 로고 및 회사 정보 */}
          <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
            <div className='flex items-center space-x-3'>
              <Image
                src='/images/logo.webp'
                alt='한국산업인재육성학원'
                width={40}
                height={40}
                className='object-contain flex-shrink-0'
              />
              <div className='text-center sm:text-left'>
                <h3 className='font-bold text-white text-lg sm:text-xl'>
                  한국산업인재육성학원
                </h3>
                <p className='text-xs sm:text-sm text-gray-300'>
                  대구 회계·세무·컴퓨터학원
                </p>
              </div>
            </div>
          </div>
          {/* 개인정보처리방침 및 이용약관 */}
          <div className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4'>
            <Link
              href='/'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-white/5'
            >
              메인화면
            </Link>
            <Link
              href='/privacy'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-white/5'
            >
              개인정보처리방침
            </Link>
            <Link
              href='/terms'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-white/5'
            >
              이용약관
            </Link>
            <Link
              href='/faq'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-white/5'
            >
              FAQ
            </Link>
            <Link
              href='/site-map'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-white/5'
            >
              사이트맵
            </Link>
          </div>
          {/* 연락처 정보 */}
          <div className='flex flex-col gap-3 sm:gap-1'>
            {/* 모바일: 세로 배치, 데스크톱: 가로 배치 */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
              <div className='text-sm text-gray-300'>
                <span className='font-semibold '>회사명: </span>
                <span className=' '>한국산업인재육성학원</span>
              </div>
              <div className='text-sm text-gray-300'>
                <span className='font-semibold'>대표자: </span>
                <span className=' '>김태성</span>
              </div>
              <div className='text-sm text-gray-300'>
                <span className='font-semibold '>TEL: </span>
                <span className=' '>053-818-5677</span>
              </div>
              <div className='text-sm text-gray-300'>
                <span className='font-semibold '>개인정보책임자: </span>
                <span className=''>조현일(himzei@gmail.com)</span>
              </div>
              <div className='text-sm text-gray-300'>
                <span className='font-semibold '>사업자번호: </span>
                <span className=''>537-82-00231</span>
              </div>
            </div>
            <div className='text-left'>
              <p className='text-sm text-gray-300 font-semibold break-words'>
                경북 경산시 조영길 18-18(조영동), 1층 [38541]
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className='border-t border-white/20 my-4 sm:my-6'></div>

        {/* 하단 정보 */}
        <div className='flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0'>
          <p className='text-xs sm:text-sm text-gray-400 text-center sm:text-left'>
            ⓒ 2025 한국산업인재육성학원. All rights reserved.
          </p>
          <div className='flex items-center space-x-2 text-xs text-gray-500'>
            <span>개인정보보호법 준수</span>
            <span>•</span>
            <span>서드파티 쿠키 미사용</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
