// components/CourseIntroSection.tsx
'use client';

import { useState } from 'react';
import {
  Database,
  TrendingUp,
  Award,
  Users,
  Clock,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BarChart3,
  Briefcase,
  GraduationCap,
  Monitor,
  Calculator,
  FileText,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';

const CourseIntroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Power BI', icon: BarChart3 },
    { id: 1, name: '빅데이터 분석', icon: Database },
    { id: 2, name: '취업 지원', icon: Briefcase },
  ];

  const features = [
    {
      icon: Target,
      title: '실무 중심 교육',
      description: '이론보다 실전! 실제 기업 데이터로 프로젝트 수행',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: '자격증 취득',
      description: '빅데이터분석기사, 컴활 1급 자격증까지 한번에',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: '소수정예 교육',
      description: '최대 20명 한정, 1:1 맞춤 멘토링 제공',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Briefcase,
      title: '취업 연계',
      description: '협력 기업 200+ 곳, 취업 성공률 85%',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const curriculum = [
    {
      week: '1-4주차',
      title: 'Power BI 기초',
      topics: [
        '데이터 연결 및 변환',
        '시각화 기본',
        'DAX 함수 기초',
        '대시보드 구성',
      ],
      icon: '📊',
    },
    {
      week: '5-8주차',
      title: '빅데이터 분석',
      topics: [
        'Python 데이터 분석',
        'SQL 데이터베이스',
        '통계 분석 기법',
        '머신러닝 기초',
      ],
      icon: '🔍',
    },
    {
      week: '9-12주차',
      title: '실전 프로젝트',
      topics: [
        '기업 데이터 분석',
        '포트폴리오 제작',
        '발표 및 리뷰',
        '취업 준비',
      ],
      icon: '🚀',
    },
  ];

  const stats = [
    { number: '3개월', label: '집중 교육 기간', icon: Clock },
    { number: '20명', label: '소수정예 정원', icon: Users },
    { number: '85%', label: '취업 성공률', icon: TrendingUp },
    { number: '200+', label: '협력 기업', icon: Briefcase },
  ];

  return (
    <section
      id='course'
      className='relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden'
    >
      {/* 배경 장식 */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        {/* 섹션 헤더 */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-blue-400' />
            <span className='text-sm font-semibold text-blue-400'>
              COURSE INTRODUCTION
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='block'>당신의 커리어를 바꿀</span>
            <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
              특별한 과정
            </span>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            영남대 인근, 가장 실무적이고 체계적인 빅데이터 분석가 양성 프로그램
          </p>
        </div>

        {/* 통계 카드 */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
              <div className='relative z-10'>
                <stat.icon className='w-8 h-8 text-blue-400 mb-4' />
                <div className='text-4xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 주요 특징 */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            왜 우리 과정을 선택해야 할까요?
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105'
              >
                <div
                  className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity'
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className='relative z-10'>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>

                  <h4 className='text-xl font-bold text-white mb-3'>
                    {feature.title}
                  </h4>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 커리큘럼 미리보기 */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            3개월 완성 로드맵
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {curriculum.map((item, index) => (
              <div
                key={index}
                className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 group'
              >
                {/* 연결선 (마지막 제외) */}
                {index < curriculum.length - 1 && (
                  <div className='hidden md:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />
                )}

                <div className='text-6xl mb-6 group-hover:scale-110 transition-transform'>
                  {item.icon}
                </div>

                <div className='inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-4'>
                  <span className='text-sm font-semibold text-blue-400'>
                    {item.week}
                  </span>
                </div>

                <h4 className='text-2xl font-bold text-white mb-6'>
                  {item.title}
                </h4>

                <ul className='space-y-3'>
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className='flex items-start space-x-3'>
                      <CheckCircle2 className='w-5 h-5 text-green-400 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-300 text-sm'>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Power BI 강조 섹션 */}
        <div className='relative bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-12 overflow-hidden'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6'>
                <Sparkles className='w-4 h-4 text-yellow-400' />
                <span className='text-sm font-semibold text-yellow-400'>
                  핵심 커리큘럼
                </span>
              </div>

              <h3 className='text-4xl font-bold text-white mb-6'>
                Power BI로 시작하는
                <br />
                데이터 분석의 세계
              </h3>

              <p className='text-gray-300 mb-8 leading-relaxed text-lg'>
                Microsoft Power BI는 전 세계적으로 가장 많이 사용되는 비즈니스
                인텔리전스 도구입니다. 복잡한 데이터를 아름답고 이해하기 쉬운
                시각화로 변환하는 능력을 키워보세요.
              </p>

              <ul className='space-y-4 mb-8'>
                {[
                  '데이터 연결 및 ETL 프로세스',
                  'DAX 함수를 활용한 고급 분석',
                  '인터랙티브 대시보드 제작',
                  '실시간 데이터 모니터링',
                ].map((item, index) => (
                  <li key={index} className='flex items-center space-x-3'>
                    <div className='w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0'>
                      <CheckCircle2 className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-white font-medium'>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href='#curriculum'
                className='inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50'
              >
                <span>상세 커리큘럼 보기</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>

            <div className='relative'>
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8'>
                <BarChart3
                  className='w-full h-64 text-yellow-400/30'
                  strokeWidth={0.5}
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='text-6xl font-bold text-white mb-4'>
                      Power BI
                    </div>
                    <div className='text-xl text-gray-300'>
                      데이터 시각화의 정석
                    </div>
                  </div>
                </div>
              </div>

              {/* 떠다니는 배지들 */}
              <div className='absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce'>
                실무 필수!
              </div>

              <div className='absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-pulse'>
                취업 1순위
              </div>
            </div>
          </div>
        </div>

        {/* 컴퓨터활용능력 강조 섹션 */}
        <div className='relative bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/30 rounded-3xl p-12 overflow-hidden mb-20'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6'>
                <Sparkles className='w-4 h-4 text-green-400' />
                <span className='text-sm font-semibold text-green-400'>
                  필수 자격증
                </span>
              </div>

              <h3 className='text-4xl font-bold text-white mb-6'>
                컴퓨터활용능력 1급
                <br />
                취업의 기본기
              </h3>

              <p className='text-gray-300 mb-8 leading-relaxed text-lg'>
                컴퓨터활용능력 1급은 모든 직장에서 요구하는 기본 소양입니다.
                엑셀과 파워포인트를 완벽하게 마스터하여 업무 효율성을 극대화하고
                취업 경쟁력을 높여보세요.
              </p>

              <ul className='space-y-4 mb-8'>
                {[
                  '엑셀 고급 함수 및 매크로',
                  '파워포인트 프레젠테이션',
                  '실무 문서 작성 능력',
                  '자동화 업무 처리',
                ].map((item, index) => (
                  <li key={index} className='flex items-center space-x-3'>
                    <div className='w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0'>
                      <CheckCircle2 className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-white font-medium'>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href='#curriculum'
                className='inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50'
              >
                <span>상세 커리큘럼 보기</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>

            <div className='relative'>
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8'>
                <Monitor
                  className='w-full h-64 text-green-400/30'
                  strokeWidth={0.5}
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='text-6xl font-bold text-white mb-4'>
                      컴활 1급
                    </div>
                    <div className='text-xl text-gray-300'>업무의 기본기</div>
                  </div>
                </div>
              </div>

              {/* 떠다니는 배지들 */}
              <div className='absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce'>
                필수 자격증!
              </div>

              <div className='absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-pulse'>
                취업 기본기
              </div>
            </div>
          </div>
        </div>

        {/* 전산회계·세무·TAT 강조 섹션 */}
        <div className='relative bg-gradient-to-br from-purple-500/10 via-violet-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 overflow-hidden mb-20'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6'>
                <Sparkles className='w-4 h-4 text-purple-400' />
                <span className='text-sm font-semibold text-purple-400'>
                  전문 분야
                </span>
              </div>

              <h3 className='text-4xl font-bold text-white mb-6'>
                전산회계·세무·TAT
                <br />
                회계 전문가의 길
              </h3>

              <p className='text-gray-300 mb-8 leading-relaxed text-lg'>
                회계와 세무 분야의 전문성을 갖춘 인재로 성장하세요. 전산회계와
                세무회계, TAT(세무회계사) 자격증까지 체계적인 교육으로 전문
                회계인으로 거듭나보세요.
              </p>

              <ul className='space-y-4 mb-8'>
                {[
                  '전산회계 1급 자격증 취득',
                  '세무회계 실무 능력',
                  'TAT 시험 대비',
                  '실무 회계 시스템 운영',
                ].map((item, index) => (
                  <li key={index} className='flex items-center space-x-3'>
                    <div className='w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center flex-shrink-0'>
                      <CheckCircle2 className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-white font-medium'>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href='#curriculum'
                className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-4 rounded-full font-bold hover:from-purple-600 hover:to-violet-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50'
              >
                <span>상세 커리큘럼 보기</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>

            <div className='relative'>
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8'>
                <Calculator
                  className='w-full h-64 text-purple-400/30'
                  strokeWidth={0.5}
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='text-6xl font-bold text-white mb-4'>
                      회계·세무
                    </div>
                    <div className='text-xl text-gray-300'>전문가 과정</div>
                  </div>
                </div>
              </div>

              {/* 떠다니는 배지들 */}
              <div className='absolute -top-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce'>
                전문 자격증!
              </div>

              <div className='absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-violet-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-pulse'>
                고급 과정
              </div>
            </div>
          </div>
        </div>

        {/* 빅데이터분석기사 강조 섹션 */}
        <div className='relative bg-gradient-to-br from-red-500/10 via-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 overflow-hidden mb-20'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-6'>
                <Sparkles className='w-4 h-4 text-red-400' />
                <span className='text-sm font-semibold text-red-400'>
                  최고급 자격증
                </span>
              </div>

              <h3 className='text-4xl font-bold text-white mb-6'>
                빅데이터분석기사
                <br />
                데이터 전문가의 꿈
              </h3>

              <p className='text-gray-300 mb-8 leading-relaxed text-lg'>
                국가기술자격증인 빅데이터분석기사는 데이터 분석 분야의 최고
                자격증입니다. Python, R, SQL 등 다양한 도구를 활용한 고급 데이터
                분석 능력을 인정받는 전문가가 되어보세요.
              </p>

              <ul className='space-y-4 mb-8'>
                {[
                  'Python & R 프로그래밍',
                  'SQL 데이터베이스 분석',
                  '머신러닝 알고리즘',
                  '실무 프로젝트 수행',
                ].map((item, index) => (
                  <li key={index} className='flex items-center space-x-3'>
                    <div className='w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0'>
                      <CheckCircle2 className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-white font-medium'>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href='#curriculum'
                className='inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/50'
              >
                <span>상세 커리큘럼 보기</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>

            <div className='relative'>
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8'>
                <Trophy
                  className='w-full h-64 text-red-400/30'
                  strokeWidth={0.5}
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='text-6xl font-bold text-white mb-4'>
                      빅데이터분석기사
                    </div>
                    <div className='text-xl text-gray-300'>국가기술자격증</div>
                  </div>
                </div>
              </div>

              {/* 떠다니는 배지들 */}
              <div className='absolute -top-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce'>
                국가자격증!
              </div>

              <div className='absolute -bottom-6 -left-6 bg-gradient-to-br from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-pulse'>
                최고급 과정
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className='text-center mt-20'>
          <div className='inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12'>
            <GraduationCap className='w-16 h-16 text-blue-400 mx-auto mb-6' />

            <h3 className='text-3xl font-bold text-white mb-4'>
              지금 바로 시작하세요
            </h3>

            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              3개월 뒤, 당신은 데이터로 비즈니스 인사이트를 발견하는
              <br />
              전문 빅데이터 분석가가 되어있을 것입니다.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='#contact'
                className='inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
              >
                <span>무료 상담 신청</span>
                <ArrowRight className='w-5 h-5' />
              </Link>

              <Link
                href='tel:053-818-5677'
                className='inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300'
              >
                <span>📞 053-818-5677</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntroSection;
