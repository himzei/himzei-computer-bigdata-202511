import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='backdrop-blur-sm border-t border-white/20'>
      <div className='container mx-auto px-4 py-8'>
        {/* 메인 Footer 콘텐츠 */}
        <div className='flex flex-col gap-4'>
          {/* 로고 및 회사 정보 */}
          <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6'>
            <div className='flex items-center space-x-1'>
              <Image
                src='/images/logo.png'
                alt='한국산업인재육성학원'
                width={40}
                height={40}
                className='object-contain'
              />
              <div className='text-center lg:text-left'>
                <h3 className='font-bold text-white'>한국산업인재육성학원</h3>
                <p className='text-xs text-gray-300'>
                  대구 회계·세무·컴퓨터학원
                </p>
              </div>
            </div>
          </div>
          {/* 개인정보처리방침 및 이용약관 */}
          <div className='flex space-x-4 px-.5'>
            <Link
              href='/'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
            >
              메인화면
            </Link>
            <Link
              href='/privacy'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
            >
              개인정보처리방침
            </Link>
            <Link
              href='/terms'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
            >
              이용약관
            </Link>
            <Link
              href='/faq'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='/sitemap'
              className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
            >
              사이트맵
            </Link>
          </div>
          {/* 연락처 정보 */}
          <div className='flex flex-col gap-1 px-.5'>
            <div className='flex gap-2'>
              <p className='text-sm text-gray-300 flex gap-x-1'>
                <span className='font-semibold'>회사명</span>
                <span>한국산업인재육성학원</span>
              </p>
              <p className='text-sm text-gray-300 flex gap-x-1'>
                <span className='font-semibold'>대표자</span>
                <span>김태성</span>
              </p>
              <p className='text-sm text-gray-300 flex gap-x-1'>
                <span className='font-semibold'>TEL</span>
                <span>053-818-5677</span>
              </p>
              <p className='text-sm text-gray-300 flex gap-x-1'>
                <span className='font-semibold'>개인정보책임자</span>
                <span>조현일(himzei@gmail.com)</span>
              </p>
              <p className='text-sm text-gray-300 flex gap-x-1'>
                <span className='font-semibold'>사업자번호:</span>
                <span>537-82-00231</span>
              </p>
            </div>
            <div className='flex gap-1'>
              <p className='text-sm text-gray-300 font-semibold'>
                경북 경산시 조영길 18-18(조영동), 1층 [38541]
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className='border-t border-white/20 my-4'></div>

        {/* 하단 정보 */}
        <div className='flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0'>
          <p className='text-sm text-gray-400'>
            ⓒ 2025 한국산업인재육성학원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
