import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import StructuredData from '../_components/StructuredData';

export const metadata: Metadata = {
  title: '이용약관',
  description:
    '한국산업인재육성학원 서비스 이용약관. 서비스 이용조건, 회원가입, 서비스 이용 및 제한에 관한 약관을 확인하세요.',
  keywords: [
    '이용약관',
    '서비스약관',
    '한국산업인재육성학원',
    '학원약관',
    '서비스이용조건',
  ],
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: '이용약관 | 한국산업인재육성학원',
    description:
      '한국산업인재육성학원 서비스 이용약관. 서비스 이용조건, 회원가입, 서비스 이용 및 제한에 관한 약관을 확인하세요.',
    url: 'https://himzei.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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
              name: '이용약관',
              item: 'https://himzei.com/terms',
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
            이용약관
          </h1>
          <p className='text-white/70 text-lg'>
            한국산업인재육성학원 서비스 이용약관
          </p>
        </div>

        {/* 이용약관 내용 */}
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20'>
          <div className='prose prose-lg max-w-none text-white/90'>
            {/* 제1장 총칙 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제1장 총칙
              </h2>

              {/* 제1조 - 목적 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제1조 (목적)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <p className='text-white/80 leading-relaxed'>
                    이 약관은 한국산업인재육성학원(이하 'KIHD')에서 제공하는
                    서비스 이용조건 및 절차에 관한 사항과 기타 필요한 사항을
                    본사과 이용자의 권리, 의미 및 책임사항 등을 규정함을
                    목적으로 합니다.
                  </p>
                </div>
              </div>

              {/* 제2조 - 약관의 효력과 변경 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제2조 (약관의 효력과 변경)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 이 약관은 이용자에게 공시함으로서 효력이 발생합니다.
                    </p>
                    <p>
                      (2) 본사은 사정 변경의 경우와 영업상 중요사유가 있을 때
                      약관을 변경할 수 있으며, 변경된 약관은 전항과 같은
                      방법으로 효력이 발생합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제3조 - 약관 외 준칙 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제3조 (약관 외 준칙)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <p className='text-white/80 leading-relaxed'>
                    이 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을
                    경우에는 그 규정에 따릅니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 제2장 회원 가입과 서비스 이용 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제2장 회원 가입과 서비스 이용
              </h2>

              {/* 제1조 - 회원의 정의 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제1조 (회원의 정의)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <p className='text-white/80 leading-relaxed'>
                    회원이란 본사에서 회원으로 적합하다고 인정하는 일반 개인으로
                    본 약관에 동의하고 서비스의 회원가입 양식을 작성하고 'ID'와
                    '비밀번호'를 발급받은 사람을 말합니다.
                  </p>
                </div>
              </div>

              {/* 제2조 - 서비스 가입의 성립 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제2조 (서비스 가입의 성립)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 서비스 가입은 이용자의 이용신청에 대한 본사의
                      이용승낙과 이용자의 약관내용에 대한 동의로 성립됩니다.
                    </p>
                    <p>
                      (2) 회원으로 가입하여 서비스를 이용하고자 하는 희망자는
                      본사에서 요청하는 개인 신상정보를 제공해야 합니다.
                    </p>
                    <p>
                      (3) 이용자의 가입신청에 대하여 본사에서 승낙한 경우,
                      본사은 회원 ID와 기타 본사에서 필요하다고 인정하는 내용을
                      이용자에게 통지합니다.
                    </p>
                    <p>
                      (4) 가입할 때 입력한 ID는 변경할 수 없으며, 한 사람에게
                      오직 한 개의 ID가 발급됩니다.
                    </p>
                    <p>
                      (5) 본사는 다음 각 호에 해당하는 가입신청에 대하여는
                      승낙하지 않습니다.
                    </p>
                    <ul className='list-disc list-inside ml-6 space-y-2'>
                      <li>가. 다른 사람의 명의를 사용하여 신청하였을 때</li>
                      <li>나. 본인의 실명으로 신청하지 않았을 때</li>
                      <li>다. 가입 신청서의 내용을 허위로 기재하였을 때</li>
                      <li>
                        라. 사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로
                        신청하였을 때
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 제3조 - 서비스 이용 및 제한 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제3조 (서비스 이용 및 제한)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이
                      없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
                    </p>
                    <p>
                      (2) 전항의 서비스 이용시간은 시스템 정기점검 등 본사에서
                      필요한 경우, 회원에게 사전 통지한 후 제한할 수 있습니다.
                    </p>
                    <p>
                      (3) 서비스 내용 중 온라인상담은 답변하는 담당자의
                      개인사정에 따라 1일 24시간 서비스가 불가능 할 수도
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제4조 - 서비스의 사용료 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제4조 (서비스의 사용료)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 서비스는 회원으로 등록한 모든 사람들이 무료로 사용할
                      수 있습니다.
                    </p>
                    <p>
                      (2) 본사에서 서비스를 유료화할 경우 유료화의 시기, 정책,
                      비용에 대하여 유료화 실시 이전에 서비스에 공시하여야
                      합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 제3장 서비스 탈퇴, 재가입 및 이용 제한 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제3장 서비스 탈퇴, 재가입 및 이용 제한
              </h2>

              {/* 제1조 - 서비스 탈퇴 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제1조 (서비스 탈퇴)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 회원이 서비스의 탈퇴를 원하면 회원 본인이 직접
                      전자메일을 통해 운영자에게 해지 신청을 요청해야 합니다.
                    </p>
                    <p>
                      (2) 탈퇴 신청시 본인임을 알 수 있는 이름, 주민등록번호,
                      ID, 전화번호, 해지사유를 알려주면, 가입기록과 일치 여부를
                      확인한 후 가입을 해지합니다.
                    </p>
                    <p>
                      (3) 탈퇴 여부는 기존의 ID와 비밀번호로 로그인이 되지
                      않으면 해지된 것입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제2조 - 서비스 재가입 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제2조 (서비스 재가입)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 제1조에 의하여 서비스에서 탈퇴한 사용자가 재가입을
                      원할 경우, 회원 본인이 직접 전자메일을 통해 운영자에게
                      재가입을 요청하면 됩니다.
                    </p>
                    <p>
                      (2) 재가입 요청 시 본인임을 알 수 있는 이름, 주민등록번호,
                      ID, 전화번호를 알려주면 재가입 처리가 이루어집니다.
                    </p>
                    <p>
                      (3) 기존의 ID와 비밀번호로 로그인이 되면 재가입이 이루어진
                      것입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제3조 - 서비스 이용제한 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제3조 (서비스 이용제한)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <p className='text-white/80 leading-relaxed mb-4'>
                    본사는 회원이 다음 사항에 해당하는 행위를 하였을 경우,
                    사전통지 없이 이용계약을 해지하거나 기간을 정하여 서비스
                    이용을 중지할 수 있습니다.
                  </p>
                  <ul className='list-disc list-inside space-y-2 text-white/80'>
                    <li>가. 공공 질서 및 미풍 양속에 반하는 경우</li>
                    <li>나. 범죄적 행위에 관련되는 경우</li>
                    <li>
                      다. 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을
                      계획 또는 실행할 경우
                    </li>
                    <li>라. 타인의 ID 및 비밀번호를 도용한 경우</li>
                    <li>마. 타인의 명예를 손상시키거나 불이익을 주는 경우</li>
                    <li>바. 같은 사용자가 다른 ID로 이중 등록을 한 경우</li>
                    <li>
                      사. 서비스에 위해를 가하는 등 건전한 이용을 저해하는 경우
                    </li>
                    <li>
                      아. 기타 관련 법령이나 본사에서 정한 이용조건에 위배되는
                      경우
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 제4장 서비스에 관한 책임의 제한 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제4장 서비스에 관한 책임의 제한
              </h2>

              {/* 제1조 - 온라인상담 */}
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                  제1조 (온라인상담)
                </h3>
                <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                  <div className='text-white/80 leading-relaxed space-y-4'>
                    <p>
                      (1) 본사은 서비스의 회원 혹은 사용자들의 상담내용이
                      상담의사와 서비스 관리자를 제외한 다른 사람에게 노출되지
                      않도록 보안을 유지합니다.
                    </p>
                    <p>
                      (2) 본사는 회원의 개인정보를 보호하기 위해 최선을
                      다하지만, 인터넷의 특성상 완전한 보안을 보장할 수는
                      없습니다.
                    </p>
                    <p>
                      (3) 회원의 ID가 부정하게 사용된 경우, 회원은 반드시 본사에
                      그 사실을 통보해야 합니다.
                    </p>
                    <p>
                      (4) 본사는 개인의 신분 확인이 가능한 정보를 회원 혹은
                      사용자의 사전허락 없이 본사와 관계가 없는 제3자에게 팔거나
                      제공하지 않습니다.
                    </p>
                    <p>
                      (5) 본사는 서비스의 사용의 편의를 위하여 Cookie 기술을
                      사용할 수 있습니다.
                    </p>
                    <p>
                      (6) 본사는 회원의 정보를 서비스 또는 회사와 업무제휴
                      업체간에 상호 제공/활용할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 제6장 분쟁조정 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제6장 분쟁조정
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    (1) 본 이용약관에 규정된 것을 제외하고 발생하는 서비스
                    이용에 관한 제반문제에 관한 분쟁은 최대한 쌍방합의에 의해
                    해결하도록 한다.
                  </p>
                  <p>
                    (2) 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우
                    회사의 소재지를 관할하는 법원을 관할법원으로 합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 제7장 제휴 링크에 대한 안내 */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-white mb-8 border-b border-white/20 pb-4'>
                제7장 제휴 링크에 대한 안내
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <div className='text-white/80 leading-relaxed space-y-4'>
                  <p>
                    본사는 서비스 향상 및 웹사이트 운영 지원을 위해 제휴 링크를
                    포함할 수 있습니다. 이러한 제휴 링크는 본사가 추천하며 현재
                    직접 사용하고 있는 온라인 수익화 도구와 관련된 상품이나
                    서비스로 연결됩니다.
                  </p>
                  <p>
                    (1) 본사는 투명성을 유지하기 위해 사용자에게 제휴 링크 사용
                    사실을 공개합니다.
                  </p>
                  <p>
                    (2) 제휴 링크를 통해 제공되는 상품이나 서비스는 KIHD의
                    엄격한 선정 기준을 통과한 것으로, 사용자에게 실질적인 가치를
                    제공하도록 노력합니다.
                  </p>
                  <p>
                    (3) 본사는 제휴 링크를 통해 제공되는 모든 상품이나 서비스에
                    대해 직접적인 책임을 지지 않습니다.
                  </p>
                  <p>
                    (4) 본사는 사용자가 제휴 링크를 통해 접근하는 모든 외부
                    사이트의 내용이나 정확성에 대해 책임을 지지 않습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 부칙 */}
            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2'>
                부칙
              </h2>
              <div className='bg-white/5 rounded-lg p-6 border border-white/10'>
                <p className='text-white/80 leading-relaxed'>
                  이 약관은 2025년 1월 1일 시행합니다.
                </p>
                <div className='mt-4 p-4 bg-white/10 rounded-lg'>
                  <p className='text-white/70 text-sm'>
                    <strong>시행일자:</strong> 2025년 1월 1일
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
            본 이용약관은 관련 법령에 따라 작성되었으며, 서비스 이용 시 반드시
            준수해야 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
