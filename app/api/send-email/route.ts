import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 이메일 전송을 위한 transporter 설정
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Gmail 주소
      pass: process.env.EMAIL_PASS, // Gmail 앱 비밀번호
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    console.log('📧 이메일 전송 API 호출됨');

    // 요청 본문 파싱 및 검증
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('❌ JSON 파싱 오류:', parseError);
      return NextResponse.json(
        { error: '잘못된 요청 형식입니다.' },
        { status: 400 }
      );
    }

    const { name, phone, email, course, message } = body;

    console.log('📝 받은 데이터:', {
      name,
      phone,
      email,
      course,
      message: message ? '있음' : '없음',
    });

    // 필수 필드 검증
    if (!name || !phone || !course) {
      console.log('❌ 필수 필드 누락:', {
        name: !!name,
        phone: !!phone,
        course: !!course,
      });
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 환경 변수 확인
    console.log('🔧 환경 변수 확인:', {
      EMAIL_USER: process.env.EMAIL_USER ? '설정됨' : '누락됨',
      EMAIL_PASS: process.env.EMAIL_PASS ? '설정됨' : '누락됨',
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('❌ 환경 변수가 설정되지 않음');
      return NextResponse.json(
        { error: '이메일 서비스 설정이 완료되지 않았습니다.' },
        { status: 500 }
      );
    }

    // 이메일 transporter 생성
    console.log('🚀 이메일 transporter 생성 중...');
    const transporter = createTransporter();

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.EMAIL_USER, // 발신자 (본인 Gmail)
      to: 'himzei@gmail.com', // 수신자 (상담 내용을 받을 이메일)
      subject: `[상담 신청] ${name}님의 ${course} 상담 신청`, // 이메일 제목
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              📞 상담 신청서
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">👤 신청자 정보</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666; width: 100px;">이름:</td>
                  <td style="padding: 8px 0; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">연락처:</td>
                  <td style="padding: 8px 0; color: #333;">
                    <a href="tel:${phone}" style="color: #6366f1; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${
                  email
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">이메일:</td>
                  <td style="padding: 8px 0; color: #333;">
                    <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                `
                    : ''
                }
              </table>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">📚 상담 희망 과정</h3>
              <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
                <strong style="color: #1e40af;">${course}</strong>
              </div>
            </div>

            ${
              message
                ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">💬 문의사항</h3>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            `
                : ''
            }

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                📅 신청 시간: ${new Date().toLocaleString('ko-KR', {
                  timeZone: 'Asia/Seoul',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // 이메일 전송
    console.log('📤 이메일 전송 시작...');
    console.log('📨 수신자:', 'himzei@gmail.com');
    console.log('📋 제목:', mailOptions.subject);

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ 이메일 전송 성공:', result.messageId);

    return NextResponse.json(
      { message: '상담 신청이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ 이메일 전송 오류 상세:', error);
    console.error('❌ 오류 타입:', typeof error);
    console.error(
      '❌ 오류 메시지:',
      error instanceof Error ? error.message : '알 수 없는 오류'
    );
    console.error(
      '❌ 오류 스택:',
      error instanceof Error ? error.stack : '스택 없음'
    );

    return NextResponse.json(
      {
        error: '이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.',
        details: error instanceof Error ? error.message : '알 수 없는 오류',
      },
      { status: 500 }
    );
  }
}
