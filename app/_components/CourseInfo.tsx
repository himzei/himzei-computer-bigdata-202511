// components/CourseInfoSection.tsx
'use client';
import {
  calculateCountdown,
  getInitialCountdown,
  DEFAULT_TARGET_DATE,
} from '@/lib/countdown';
import { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  Users,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Sparkles,
  Mail,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export default function CourseInfo() {
  // hydration 오류 방지를 위해 초기값은 일관된 값으로 설정
  const [countdown, setCountdown] = useState(
    getInitialCountdown(DEFAULT_TARGET_DATE)
  );
  const [isClient, setIsClient] = useState(false);

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
  // 핵심 정보
  const keyInfo = [
    {
      icon: Calendar,
      title: '모집기간',
      content: '~ 2024년 11월 3일',
      highlight: '선착순 10명',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: GraduationCap,
      title: '교육기간',
      content: '2025년 10월 31일',
      highlight: '~ 2026년 4월 24일',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: '교육문의',
      content: '053-818-5677',
      highlight: '010-7186-0119',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: '신청방법',
      content: 'abab002@naver.com',
      highlight: '신청서 제출',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  // 교육대상
  const targetAudience = [
    '영남대학교 3·4학년',
    '졸업생, 휴학생',
    '지역실업자',
    '지역취준생 등',
  ];

  // 국가공인자격증
  const nationalCertificates = [
    { name: '전산회계 1급', detail: '(FAT 1급)' },
    { name: '전산세무 2급', detail: '(TAT 2급)' },
    { name: '전산세무 1급', detail: '(TAT 1급)' },
  ];

  // 국가자격증
  const stateCertificates = [
    { name: '컴퓨터활용능력', detail: '2급/1급' },
    { name: '빅데이터 분석사', detail: '' },
    { name: '경영정보시각화능력', detail: '' },
  ];

  return (
    <section id='info' className='relative py-20 overflow-hidden'>
      {/* 배경 장식 */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        {/* 섹션 헤더 */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-blue-400' />
            <span className='text-sm font-semibold text-blue-400'>
              COURSE INFORMATION
            </span>
          </div>

          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4 leading-tight'>
            <span className='block'>Power BI 기반의</span>
            <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
              재무빅데이터 분석사 사무관리원
            </span>
            <span className='block mt-2'>양성과정</span>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            영남대학교 회계세무학과와 함께하는 특별한 교육 과정
          </p>
        </div>

        {/* 마감 임박 배너 */}
        <div className='mb-12 max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl p-1 animate-pulse'>
            <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center'>
                    <AlertCircle className='w-6 h-6 text-red-400' />
                  </div>
                  <div className='text-left'>
                    <div className='text-red-400 text-sm font-semibold mb-1'>
                      ⚠️ 마감 임박!
                    </div>
                    <div className='text-white font-bold text-lg'>
                      모집 마감: 2025년 11월 3일{' '}
                      <span className='text-yellow-300'>
                        D-{countdown.displayText}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href='#contact'
                  onClick={e => {
                    e.preventDefault();
                    document
                      .querySelector('#contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className='whitespace-nowrap bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105'
                >
                  지금 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 정보 카드 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
          {keyInfo.map((info, index) => (
            <div
              key={index}
              className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105'
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity`}
              />

              <div className='relative z-10'>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <info.icon className='w-7 h-7 text-white' />
                </div>

                <h3 className='text-lg font-bold text-gray-400 mb-3'>
                  {info.title}
                </h3>
                <p className='text-xl font-bold text-white mb-2'>
                  {info.content}
                </p>
                <p className='text-sm text-gray-300'>{info.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 시간표 & 교육대상 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto'>
          {/* 시간표 */}
          <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
                <Clock className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white'>교육시간</h3>
            </div>

            <div className='space-y-4'>
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle2 className='w-5 h-5 text-blue-400 flex-shrink-0 mt-1' />
                  <div>
                    <div className='text-white font-semibold mb-1'>학기중</div>
                    <div className='text-gray-300 text-lg'>17:00 ~ 21:50</div>
                  </div>
                </div>
              </div>

              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle2 className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-1' />
                  <div>
                    <div className='text-white font-semibold mb-1'>방학중</div>
                    <div className='text-gray-300 text-lg'>09:00 ~ 17:40</div>
                    <div className='text-sm text-gray-400 mt-1'>
                      (12월 22일부터)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 p-4 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl'>
              <p className='text-blue-300 text-sm leading-relaxed'>
                💡 학기 일정에 맞춰 유연하게 조정되는 시간표로 학업과 병행이
                가능합니다
              </p>
            </div>
          </div>

          {/* 교육대상 */}
          <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center'>
                <Users className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white'>교육대상</h3>
            </div>

            <div className='space-y-3'>
              {targetAudience.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300'
                >
                  <div className='w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0'>
                    <CheckCircle2 className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-white font-medium text-lg'>{item}</span>
                </div>
              ))}
            </div>

            <div className='mt-6 p-4 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl'>
              <p className='text-purple-300 text-sm leading-relaxed'>
                💡 영남대 재학생 및 졸업생, 지역 주민 누구나 신청 가능합니다
              </p>
            </div>
          </div>
        </div>

        {/* 취득 자격증 */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              취득 가능 자격증
            </h3>
            <p className='text-gray-400 text-lg'>
              과정 이수 후 다양한 전문 자격증 취득 기회
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* 국가공인자격증 */}
            <div className='bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center'>
                  <Award className='w-7 h-7 text-white' />
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-white'>
                    국가공인자격증
                  </h4>
                  <p className='text-yellow-300 text-sm'>한국세무사회 주관</p>
                </div>
              </div>

              <div className='space-y-3'>
                {nationalCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300'
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 rounded-full bg-yellow-400'></div>
                      <span className='text-white font-semibold text-lg'>
                        {cert.name}
                      </span>
                    </div>
                    <span className='text-gray-400 text-sm'>{cert.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 국가자격증 */}
            <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center'>
                  <BookOpen className='w-7 h-7 text-white' />
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-white'>국가자격증</h4>
                  <p className='text-blue-300 text-sm'>대한상공회의소 주관</p>
                </div>
              </div>

              <div className='space-y-3'>
                {stateCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300'
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 rounded-full bg-blue-400'></div>
                      <span className='text-white font-semibold text-lg'>
                        {cert.name}
                      </span>
                    </div>
                    {cert.detail && (
                      <span className='text-gray-400 text-sm'>
                        {cert.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
