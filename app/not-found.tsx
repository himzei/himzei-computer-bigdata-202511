'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, Map } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center'>
      <div className='container mx-auto px-4 py-20'>
        <div className='max-w-2xl mx-auto text-center'>
          {/* 404 에러 메시지 */}
          <div className='mb-8'>
            <h1 className='text-8xl md:text-9xl font-bold text-white/20 mb-4'>
              404
            </h1>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              페이지를 찾을 수 없습니다
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>
          </div>

          {/* 안내 메시지 */}
          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8'>
            <div className='flex items-center justify-center mb-4'>
              <Search className='text-blue-400 mr-2' size={24} />
              <h3 className='text-lg font-semibold text-white'>
                찾고 계신 페이지가 없나요?
              </h3>
            </div>
            <p className='text-gray-300 mb-6'>
              아래 버튼들을 통해 원하시는 정보를 찾아보세요.
            </p>

            {/* 주요 링크 버튼들 */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <Link
                href='/'
                className='flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              >
                <Home size={20} />
                <span>홈으로 돌아가기</span>
              </Link>

              <Link
                href='/sitemap'
                className='flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              >
                <Map size={20} />
                <span>사이트맵 보기</span>
              </Link>
            </div>
          </div>

          {/* 인기 페이지 링크 */}
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              인기 페이지
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
              <Link
                href='/#course'
                className='text-blue-300 hover:text-blue-200 transition-colors text-sm'
              >
                과정소개
              </Link>
              <Link
                href='/#curriculum'
                className='text-blue-300 hover:text-blue-200 transition-colors text-sm'
              >
                커리큘럼
              </Link>
              <Link
                href='/#benefits'
                className='text-blue-300 hover:text-blue-200 transition-colors text-sm'
              >
                수강혜택
              </Link>
              <Link
                href='/#reviews'
                className='text-blue-300 hover:text-blue-200 transition-colors text-sm'
              >
                수강후기
              </Link>
              <Link
                href='/#contact'
                className='text-blue-300 hover:text-blue-200 transition-colors text-sm'
              >
                상담신청
              </Link>
              <Link
                href='/faq'
                className='text-blue-300 hover:text-blue-200 transition-colors text-sm'
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              도움이 필요하신가요?
            </h3>
            <p className='text-gray-300 mb-4'>
              궁금한 점이 있으시면 언제든지 연락주세요
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:053-818-5677'
                className='flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              >
                📞 053-818-5677
              </a>
              <a
                href='/#contact'
                className='flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              >
                💬 무료 상담신청
              </a>
            </div>
          </div>

          {/* 뒤로가기 버튼 */}
          <div className='mt-8'>
            <button
              onClick={() => window.history.back()}
              className='flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mx-auto'
            >
              <ArrowLeft size={16} />
              <span>이전 페이지로 돌아가기</span>
            </button>
          </div>

          {/* 학원 정보 */}
          <div className='mt-12 text-center'>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4'>
              <h4 className='text-sm font-semibold text-white mb-2'>
                한국산업인재육성학원
              </h4>
              <p className='text-gray-400 text-xs mb-1'>
                대구 회계·세무·컴퓨터학원
              </p>
              <p className='text-gray-400 text-xs'>
                경북 경산시 조영길 18-18(조영동), 1층 [38541]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
