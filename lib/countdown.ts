/**
 * D-Day 카운트다운 계산 함수
 * 11월 3일을 기준으로 남은 일수를 계산합니다.
 */

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  displayText: string;
}

/**
 * 목표 날짜까지의 남은 시간을 계산합니다.
 * @param targetDate 목표 날짜 (기본값: 2024년 11월 3일)
 * @returns CountdownResult 객체
 */
export function calculateCountdown(
  targetDate: Date = new Date('2025-11-03')
): CountdownResult {
  const now = new Date();
  const timeDiff = targetDate.getTime() - now.getTime();

  // 시간이 지났는지 확인
  const isExpired = timeDiff <= 0;

  if (isExpired) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      displayText: 'D-Day',
    };
  }

  // 남은 시간 계산
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // 표시 텍스트 생성 - 남은 시간 형식으로 표시
  const displayText = `${days.toString()}일 ${hours.toString()}시간 ${minutes.toString()}분 ${seconds.toString()}초`;

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired,
    displayText,
  };
}

/**
 * 실시간 카운트다운을 위한 훅 (클라이언트 컴포넌트용)
 * @param targetDate 목표 날짜
 * @param updateInterval 업데이트 간격 (밀리초, 기본값: 1000ms)
 * @returns 현재 카운트다운 상태
 */
export function useCountdown(
  targetDate: Date = new Date('2025-11-03'),
  updateInterval: number = 1000
): CountdownResult {
  // 이 함수는 클라이언트 컴포넌트에서 useState와 useEffect와 함께 사용되어야 합니다.
  // 서버 컴포넌트에서는 calculateCountdown을 직접 사용하세요.

  const result = calculateCountdown(targetDate);
  return result;
}

/**
 * 목표 날짜가 올바른지 검증합니다.
 * @param date 검증할 날짜
 * @returns 유효한 날짜인지 여부
 */
export function isValidTargetDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * 기본 목표 날짜 (2024년 11월 3일)
 */
export const DEFAULT_TARGET_DATE = new Date('2025-11-03');
