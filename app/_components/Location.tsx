'use client';

import {
  MapPin,
  Bus,
  Car,
  Train,
  Phone,
  Clock,
  Navigation,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export default function Location() {
  const address = {
    main: '경상북도 경산시 조영길 18-18(조영동)',
    zipCode: '38541',
  };

  const transportation = [
    {
      icon: Bus,
      type: '버스',
      color: 'from-green-500 to-emerald-500',
      routes: [
        { number: '100번', info: '영남대 정류장 하차' },
        { number: '급행1번', info: '영남대 정류장 하차' },
        { number: '시내버스', info: '영남대 정문 앞 하차' },
      ],
    },
    {
      icon: Train,
      type: '지하철',
      color: 'from-blue-500 to-cyan-500',
      routes: [
        { number: '대구 1호선', info: '영남대역 3번 출구' },
        { number: '도보', info: '약 15분 소요' },
      ],
    },
    {
      icon: Car,
      type: '자가용',
      color: 'from-purple-500 to-pink-500',
      routes: [
        { number: '네비게이션', info: '영남대학교 검색' },
        { number: '주차', info: '학원 건물 주차 가능' },
      ],
    },
  ];

  return (
    <section id='location' className='relative py-20 overflow-hidden'>
      {/* 배경 장식 */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        {/* 섹션 헤더 */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-green-400' />
            <span className='text-sm font-semibold text-green-400'>
              LOCATION
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='block'>오시는 길</span>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            영남대학교 인근, 찾아오기 쉬운 위치에 있습니다
          </p>
        </div>

        {/* 주소 정보 */}
        <div className='max-w-4xl mx-auto mb-12'>
          <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8'>
            <div className='flex items-start space-x-4 mb-6'>
              <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0'>
                <MapPin className='w-7 h-7 text-white' />
              </div>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  한국산업인재육성학원
                </h3>
                <p className='text-gray-300 text-lg mb-1'>{address.main}</p>

                <p className='text-gray-500 text-sm mt-1'>
                  우편번호: {address.zipCode}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4'>
                <Phone className='w-5 h-5 text-green-400' />
                <div>
                  <div className='text-sm text-gray-400'>대표번호</div>
                  <div className='text-white font-semibold'>053-818-5677</div>
                </div>
              </div>

              <div className='flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4'>
                <Clock className='w-5 h-5 text-blue-400' />
                <div>
                  <div className='text-sm text-gray-400'>운영시간</div>
                  <div className='text-white font-semibold'>
                    평일 09:00 - 18:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 네이버 지도 */}
        <div className='max-w-6xl mx-auto mb-12'>
          <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-4 overflow-hidden'>
            <div className='relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden'>
              {/* 네이버 지도 iframe */}
              <iframe
                src='https://naver.me/GxLUHyKV'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='네이버 지도'
              ></iframe>
            </div>

            <div className='mt-4 text-center'>
              <Link
                href='https://map.naver.com/p/entry/place/11728055?c=15.00,0,0,0,dh&placePath=%2Fhome%3Fentry=plt'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors'
              >
                <Navigation className='w-5 h-5' />
                <span className='font-semibold'>네이버 지도에서 크게 보기</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 교통편 안내 */}
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            대중교통 이용 안내
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {transportation.map((transport, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300'
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${transport.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <transport.icon className='w-8 h-8 text-white' />
                </div>

                <h4 className='text-2xl font-bold text-white text-center mb-6'>
                  {transport.type}
                </h4>

                <div className='space-y-3'>
                  {transport.routes.map((route, routeIndex) => (
                    <div
                      key={routeIndex}
                      className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4'
                    >
                      <div className='text-white font-semibold mb-1'>
                        {route.number}
                      </div>
                      <div className='text-gray-400 text-sm'>{route.info}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
