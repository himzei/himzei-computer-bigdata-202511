import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQContent from './_components/FAQContent';

// FAQ 페이지 메타데이터 정의
export const metadata: Metadata = {
  title: '자주 묻는 질문 | 한국산업인재육성학원',
  description:
    '한국산업인재육성학원 POWER BI 빅데이터 분석 과정에 대한 자주 묻는 질문과 답변. 수강료, 수강기간, 취업률, 교육과정, 학원위치 등 궁금한 모든 것을 확인하세요. 무료 상담 053-818-5677',
  keywords: [
    'FAQ',
    '자주 묻는 질문',
    'POWER BI 교육',
    '빅데이터 분석',
    '수강료',
    '수강기간',
    '취업률',
    '한국산업인재육성학원',
    '대구 학원',
    '경산시 조영동',
    '정부지원금',
    '컴퓨터 초보',
    '실무 프로젝트',
    '강사진',
    '학원 위치',
    '수강 신청',
    '운영시간',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: '자주 묻는 질문 | 한국산업인재육성학원',
    description:
      '한국산업인재육성학원 POWER BI 빅데이터 분석 과정에 대한 자주 묻는 질문과 답변. 수강료, 수강기간, 취업률, 교육과정 등 궁금한 모든 것을 확인하세요.',
    url: 'https://himzei.com/faq',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
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
            자주 묻는 질문
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            한국산업인재육성학원에 대해 궁금한 점들을 확인해보세요
          </p>
        </div>

        {/* FAQ 섹션 */}
        <FAQContent />

        {/* 추가 문의 섹션 */}
        <div className='max-w-4xl mx-auto mt-16'>
          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              더 궁금한 점이 있으신가요?
            </h2>
            <p className='text-gray-300 mb-6'>
              위에서 답을 찾지 못하셨다면 언제든지 문의해주세요
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:053-818-5677'
                className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              >
                📞 053-818-5677
              </a>
              <a
                href='/#contact'
                className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              >
                💬 무료 상담신청
              </a>
            </div>
          </div>
        </div>

        {/* SEO를 위한 숨겨진 텍스트 */}
        <div className='hidden'>
          <h2>대구 학원 FAQ</h2>
          <p>
            대구에서 POWER BI 교육을 받을 수 있는 학원, 빅데이터 분석 교육,
            재무분석가 취업, 사무관리원 양성과정에 대한 자주 묻는 질문과
            답변입니다.
          </p>
          <p>
            한국산업인재육성학원은 경산시 조영동에 위치한 대구 최고의 회계,
            세무, 컴퓨터학원입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
