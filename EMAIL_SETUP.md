# 이메일 전송 기능 설정 가이드

## 📧 Gmail 이메일 전송 설정

상담 신청 폼에서 실제 이메일이 전송되도록 설정하는 방법입니다.

### 1. Gmail 앱 비밀번호 생성

1. **Google 계정 설정**으로 이동

   - https://myaccount.google.com/security

2. **2단계 인증 활성화** (아직 안 했다면)

   - 보안 → 2단계 인증 → 시작하기

3. **앱 비밀번호 생성**
   - https://myaccount.google.com/apppasswords
   - "앱 선택" → "기타(맞춤 이름)" → "Next.js Email" 입력
   - 생성된 16자리 비밀번호 복사 (예: `abcd efgh ijkl mnop`)

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 입력:

```env
# Gmail 이메일 전송을 위한 환경 변수
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

**예시:**

```env
EMAIL_USER=himzei@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 3. 개발 서버 재시작

환경 변수 변경 후 개발 서버를 재시작하세요:

```bash
npm run dev
```

### 4. 테스트

1. 웹사이트의 상담 신청 폼을 작성
2. 제출 버튼 클릭
3. `himzei@gmail.com`으로 이메일이 전송되는지 확인

## 🔧 문제 해결

### "Invalid login" 오류

- Gmail 앱 비밀번호가 올바른지 확인
- 2단계 인증이 활성화되어 있는지 확인
- 비밀번호에 공백이 포함되어 있으면 제거

### "Connection timeout" 오류

- 인터넷 연결 확인
- 방화벽 설정 확인

### 이메일이 전송되지 않는 경우

- 브라우저 개발자 도구의 콘솔에서 오류 메시지 확인
- 서버 콘솔에서 API 오류 로그 확인

## 📝 이메일 내용

전송되는 이메일에는 다음 정보가 포함됩니다:

- 신청자 이름, 연락처, 이메일
- 상담 희망 과정
- 문의사항 (있는 경우)
- 신청 시간

## 🚀 배포 시 주의사항

Vercel, Netlify 등에 배포할 때는 환경 변수를 플랫폼 설정에서 추가해야 합니다:

1. **Vercel**: 프로젝트 설정 → Environment Variables
2. **Netlify**: Site settings → Environment variables

환경 변수명:

- `EMAIL_USER`
- `EMAIL_PASS`



