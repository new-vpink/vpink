// lib/dateUtils.ts

/**
 * 현재 날짜와 시간을 형식화된 문자열로 반환합니다.
 * @returns 형식화된 현재 날짜와 시간 문자열
 */
export function getFormattedDate(): string {
  const now = new Date();
  return now.toLocaleString();
}

/**
 * 주어진 날짜가 오늘인지 확인합니다.
 * @param date 확인할 날짜
 * @returns 주어진 날짜가 오늘이면 true, 그렇지 않으면 false
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}
