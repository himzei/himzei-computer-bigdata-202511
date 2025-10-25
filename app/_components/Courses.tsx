// components/CourseIntroSection.tsx
'use client';

import {
  TrendingUp,
  Award,
  Users,
  Clock,
  Target,
  CheckCircle2,
  Sparkles,
  Briefcase,
} from 'lucide-react';

const CourseIntroSection = () => {
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
      title: '체계적 교육',
      description: '최대 35명 한정, 효율적인 그룹 학습 환경',
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
      week: '1-6주차',
      title: '컴퓨터 활용능력',
      sub: '(2급/1급)',
      topics: [
        '엑셀 기초 및 고급 함수',
        '파워포인트 프레젠테이션',
        '실무 문서 작성 능력',
        '자동화 업무 처리',
      ],
      icon: '💻',
    },
    {
      week: '7-14주차',
      title: '전산회계·세무',
      sub: '(TAT2급/1급)',
      topics: [
        '전산회계 1급 자격증',
        '세무회계 실무 능력',
        'TAT 시험 대비',
        '실무 회계 시스템',
      ],
      icon: '📊',
    },
    {
      week: '15-18주차',
      title: '경영정보시각화',
      sub: '(POWER BI)',
      topics: [
        '데이터 연결 및 변환',
        'DAX 함수 활용',
        '인터랙티브 대시보드',
        '실시간 데이터 모니터링',
      ],
      icon: '📈',
    },
    {
      week: '19-24주차',
      title: '빅데이터분석기사',
      sub: '(PYTHON)',
      topics: [
        'Python & R 프로그래밍',
        'SQL 데이터베이스 분석',
        '머신러닝 알고리즘',
        '실무 프로젝트 수행',
      ],
      icon: '🔍',
    },
  ];

  const stats = [
    { number: '6개월', label: '집중 교육 기간', icon: Clock },
    { number: '20명', label: '소수정예 정원', icon: Users },
    { number: '85%', label: '취업 성공률', icon: TrendingUp },
    { number: '200+', label: '협력 기업', icon: Briefcase },
  ];

  return (
    <section id='course' className='relative py-20 overflow-hidden'>
      <div className='absolute top-36 left-1/2 transform -translate-x-1/2 w-full h-28 bg-blue-500/50 rounded-full blur-2xl' />
      <div className='container mx-auto px-4 relative z-10 flex flex-col gap-20'>
        {/* 섹션 헤더 */}
        <div className='text-center'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-blue-400' />
            <span className='text-sm font-semibold text-blue-400'>
              COURSE INTRODUCTION
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <p className='block'>당신의 커리어를 바꿀</p>
            <p className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
              특별한 과정
            </p>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            가장 실무적이고 체계적인 빅데이터 분석가 양성 프로그램
          </p>
        </div>

        {/* 통계 카드 */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
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
        <div className=''>
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
        <div className=''>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            6개월 완성 로드맵
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
            {curriculum.map((item, index) => (
              <div
                key={index}
                className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 group'
              >
                {/* 연결선 (마지막 제외) */}
                {index < curriculum.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />
                )}

                <div className='text-6xl mb-6 group-hover:scale-110 transition-transform'>
                  {item.icon}
                </div>

                <div className='inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-4'>
                  <span className='text-sm font-semibold text-blue-400'>
                    {item.week}
                  </span>
                </div>

                <h4 className='text-2xl font-bold text-white'>{item.title}</h4>
                <h5 className='text-2xl font-bold text-white mb-6'>
                  {item.sub}
                </h5>

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
      </div>
    </section>
  );
};

export default CourseIntroSection;
