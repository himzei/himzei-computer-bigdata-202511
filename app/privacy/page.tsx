import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import StructuredData from '../_components/StructuredData';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description:
    '한국산업인재육성학원 개인정보처리방침. 개인정보 수집, 이용, 보관, 파기에 관한 정책을 확인하세요.',
  keywords: [
    '개인정보처리방침',
    '개인정보보호',
    '한국산업인재육성학원',
    '개인정보정책',
    '정보보호',
  ],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: '개인정보처리방침 | 한국산업인재육성학원',
    description:
      '한국산업인재육성학원 개인정보처리방침. 개인정보 수집, 이용, 보관, 파기에 관한 정책을 확인하세요.',
    url: 'https://kihd.ac.kr/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className='min-h-screen py-20'>
      {/* 구조화된 데이터 추가 */}
      <StructuredData
        type='breadcrumb'
        data={{
          breadcrumbs: [
            {
              '@type': 'ListItem',
              position: 2,
              name: '개인정보처리방침',
              item: 'https://kihd.ac.kr/privacy',
            },
          ],
        }}
      />
      <div className='container mx-auto px-4 max-w-4xl'>
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

        {/* 페이지 제목 */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            개인정보처리방침
          </h1>
          <p className='text-white/70 text-lg'>
            한국산업인재육성학원 개인정보처리방침
          </p>
        </div>

        {/* 개인정보처리방침 내용 */}
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20'>
          <div className='prose prose-lg max-w-none text-white/90'>
            {/* 서문 */}
            <section className='mb-12'>
              <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10'>
                <p className='text-white/80 leading-relaxed text-lg'>
                  <strong>한국산업인재육성학원(이하 '당사')</strong>은 고객의
                  개인정보 보호를 매우 중요하게 여기며, 개인정보보호법을
                  준수하고 있습니다. 당사의 개인정보 취급방침을 통해 고객님이
                  제공하시는 개인정보의 사용 목적과 방식, 그리고 개인정보 보호를
                  위해 어떠한 조치를 취하고 있는지 알려드립니다.
                </p>
              </div>
            </section>

            {/* 제1조 - 수집하는 개인정보의 항목 및 수집방법 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제1조 (수집하는 개인정보의 항목 및 수집방법)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      수집하는 개인정보 항목
                    </h3>
                    <ul className='list-disc list-inside ml-6 space-y-2'>
                      <li>
                        <strong>회원가입 시 필수항목:</strong> 성명, 아이디,
                        비밀번호, 이메일 주소
                      </li>
                      <li>
                        <strong>선택항목:</strong> 생년월일, 전화번호, 관심분야
                      </li>
                      <li>
                        <strong>자동 수집 정보:</strong> 서비스 이용 기록, 접속
                        로그, 쿠키, 접속 IP 정보
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      수집방법
                    </h3>
                    <p>홈페이지, 서면양식, 이메일, 고객센터 전화 등</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 제2조 - 개인정보의 수집 및 이용목적 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제2조 (개인정보의 수집 및 이용목적)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <p className='text-white/80 leading-relaxed mb-4'>
                  당사는 수집한 개인정보를 다음 목적을 위해 활용합니다:
                </p>
                <ul className='list-disc list-inside ml-6 space-y-2 text-white/80'>
                  <li>
                    <strong>회원 관리:</strong> 회원제 서비스 이용에 따른 본인
                    확인, 개인 식별, 불량 회원의 부정 이용 방지 및 비인가 사용
                    방지
                  </li>
                  <li>
                    <strong>서비스 제공:</strong> 서비스 제공에 관한 계약 이행
                    및 서비스 제공에 따른 요금정산
                  </li>
                  <li>
                    <strong>고객 지원:</strong> 문의사항 처리 및 고객 서비스
                    제공
                  </li>
                  <li>
                    <strong>마케팅:</strong> 새로운 서비스 및 이벤트 정보 제공
                    (동의 시)
                  </li>
                </ul>
              </div>
            </section>

            {/* 제3조 - 개인정보의 보유 및 이용기간 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제3조 (개인정보의 보유 및 이용기간)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    당사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
                    지체 없이 파기합니다. 다만, 관련 법령에 의해 보존할 필요성이
                    있는 경우는 예외로 합니다.
                  </p>
                  <div className='bg-white/10 rounded-lg p-4'>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      보존 기간
                    </h3>
                    <ul className='list-disc list-inside ml-6 space-y-1'>
                      <li>회원 정보: 회원 탈퇴 시까지</li>
                      <li>서비스 이용 기록: 3년 (전자상거래법)</li>
                      <li>
                        계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)
                      </li>
                      <li>
                        대금결제 및 재화 등의 공급에 관한 기록: 5년
                        (전자상거래법)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 제4조 - 개인정보의 파기절차 및 방법 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제4조 (개인정보의 파기절차 및 방법)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    당사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
                    불필요하게 되었을 때에는 지체없이 해당 개인정보를
                    파기합니다.
                  </p>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='text-lg font-bold text-white mb-2'>
                        전자적 파일 형태
                      </h3>
                      <p>기술적 방법을 사용하여 영구적으로 삭제</p>
                    </div>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='text-lg font-bold text-white mb-2'>
                        종이 문서
                      </h3>
                      <p>분쇄기로 분쇄하거나 소각</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 제5조 - 개인정보 제공 및 공유 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제5조 (개인정보 제공 및 공유)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    당사는 고객의 동의 없이 개인정보를 외부에 공유하거나
                    제공하지 않습니다. 단, 다음의 경우는 예외로 합니다:
                  </p>
                  <ul className='list-disc list-inside ml-6 space-y-2'>
                    <li>법령에 의거한 경우</li>
                    <li>고객의 안전을 위해 필요한 경우</li>
                    <li>고객이 사전에 동의한 경우</li>
                    <li>
                      서비스 제공을 위해 필요한 최소한의 정보를 제3자에게
                      제공하는 경우
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 제6조 - 개인정보 취급위탁 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제6조 (개인정보 취급위탁)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    당사는 서비스 향상을 위해 필요한 경우 외부 업체에 개인정보
                    처리를 위탁할 수 있으며, 위탁 시 개인정보 보호를 위한 안전성
                    확보 조치를 취합니다.
                  </p>
                  <div className='bg-white/10 rounded-lg p-4'>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      위탁 업체 및 위탁 업무
                    </h3>
                    <ul className='list-disc list-inside ml-6 space-y-1'>
                      <li>웹사이트 호스팅 업체: 서버 운영 및 관리</li>
                      <li>이메일 발송 업체: 이메일 발송 서비스</li>
                      <li>결제 처리 업체: 결제 처리 및 관리</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 제7조 - 이용자 및 법정대리인의 권리와 그 행사 방법 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제7조 (이용자 및 법정대리인의 권리와 그 행사 방법)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    고객은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
                    수정할 수 있으며, 가입 해지 요청도 할 수 있습니다.
                  </p>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='text-lg font-bold text-white mb-2'>
                        개인정보 조회
                      </h3>
                      <p>
                        마이페이지에서 본인의 개인정보를 확인할 수 있습니다.
                      </p>
                    </div>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='text-lg font-bold text-white mb-2'>
                        개인정보 수정
                      </h3>
                      <p>마이페이지에서 개인정보를 수정할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 제8조 - 동의철회 / 회원탈퇴 방법 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제8조 (동의철회 / 회원탈퇴 방법)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    웹사이트 내 마이페이지에서 직접 회원탈퇴를 요청할 수 있으며,
                    탈퇴 요청 후 10일 이내에 처리됩니다.
                  </p>
                  <div className='bg-white/10 rounded-lg p-4'>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      탈퇴 절차
                    </h3>
                    <ol className='list-decimal list-inside ml-6 space-y-1'>
                      <li>마이페이지 접속</li>
                      <li>회원탈퇴 메뉴 선택</li>
                      <li>탈퇴 사유 입력</li>
                      <li>비밀번호 확인</li>
                      <li>탈퇴 완료</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* 제9조 - 개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한 사항 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제9조 (개인정보 자동 수집 장치의 설치/운영 및 그 거부에 관한
                사항)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    당사는 개인화되고 맞춤화된 서비스를 제공하기 위해 쿠키를
                    사용할 수 있으며, 고객은 웹브라우저 설정을 통해 쿠키 저장을
                    거부할 수 있습니다.
                  </p>
                  <div className='bg-white/10 rounded-lg p-4'>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      쿠키 설정 방법
                    </h3>
                    <ul className='list-disc list-inside ml-6 space-y-1'>
                      <li>Internet Explorer: 도구 → 인터넷 옵션 → 개인정보</li>
                      <li>Chrome: 설정 → 고급 → 개인정보 및 보안 → 쿠키</li>
                      <li>
                        Firefox: 옵션 → 개인정보 및 보안 → 쿠키 및 사이트 데이터
                      </li>
                      <li>
                        Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트
                        데이터
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 제10조 - 개인정보관리책임자 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제10조 (개인정보관리책임자)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4'>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      개인정보관리책임자
                    </h3>
                    <ul className='space-y-1'>
                      <li>
                        <strong>담당자:</strong> 조현일
                      </li>
                      <li>
                        <strong>연락처:</strong> himzei@gmail.com
                      </li>
                      <li>
                        <strong>전화번호:</strong> 053-818-5677
                      </li>
                    </ul>
                  </div>
                  <p>
                    개인정보 처리에 관한 불만이나 문의사항이 있으시면
                    개인정보관리책임자에게 연락해 주시기 바랍니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 제11조 - 개인정보의 안전성 확보 조치 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제11조 (개인정보의 안전성 확보 조치)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    당사는 개인정보의 안전한 보호를 위해 다양한 기술적, 관리적
                    대책을 마련하고 있습니다.
                  </p>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='text-lg font-bold text-white mb-2'>
                        기술적 대책
                      </h3>
                      <ul className='list-disc list-inside ml-6 space-y-1'>
                        <li>개인정보 암호화</li>
                        <li>해킹 등에 대비한 기술적 대책</li>
                        <li>개인정보에 대한 접근 제한</li>
                        <li>접속기록의 보관 및 위변조 방지</li>
                      </ul>
                    </div>
                    <div className='bg-white/10 rounded-lg p-4'>
                      <h3 className='text-lg font-bold text-white mb-2'>
                        관리적 대책
                      </h3>
                      <ul className='list-disc list-inside ml-6 space-y-1'>
                        <li>개인정보 보호책임자의 지정</li>
                        <li>개인정보 취급 직원의 최소화</li>
                        <li>정기적인 개인정보 보호 교육</li>
                        <li>개인정보보호 정책의 수립 및 시행</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 제12조 - 정책 변경에 따른 공지의무 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제12조 (정책 변경에 따른 공지의무)
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <p className='text-white/80 leading-relaxed'>
                  개인정보 취급방침은 법령, 정책, 보안기술의 변경에 따라 내용이
                  변경될 수 있으며, 변경 시 웹사이트를 통해 공지할 것입니다.
                </p>
              </div>
            </section>

            {/* 시행일자 */}
            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                시행일자
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <p className='text-white/80 leading-relaxed'>
                  이 개인정보처리방침은 2025년 10월 5일 시행합니다.
                </p>
                <div className='mt-4 p-4 bg-white/10 rounded-lg'>
                  <p className='text-white/70 text-sm'>
                    <strong>시행일자:</strong> 2025년 10월 5일
                  </p>
                </div>
              </div>
            </section>

            {/* 연락처 정보 */}
            <section className='mt-12 pt-8 border-t border-white/20'>
              <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10'>
                <h3 className='text-xl font-bold text-white mb-4'>문의사항</h3>
                <div className='text-white/80 space-y-2'>
                  <p>
                    <strong>학원명:</strong> 한국산업인재육성학원
                  </p>
                  <p>
                    <strong>대표자:</strong> 김태성
                  </p>
                  <p>
                    <strong>전화번호:</strong> 053-818-5677
                  </p>
                  <p>
                    <strong>개인정보보호책임자:</strong> 조현일
                    (himzei@gmail.com)
                  </p>
                  <p>
                    <strong>사업자번호:</strong> 537-82-00231
                  </p>
                  <p>
                    <strong>주소:</strong> 경북 경산시 조영길 18-18(조영동)
                    [38541]
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 하단 안내 */}
        <div className='text-center mt-8'>
          <p className='text-white/60 text-sm'>
            본 개인정보처리방침은 개인정보보호법에 따라 작성되었으며, 개인정보
            처리에 관한 모든 사항을 포함하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
