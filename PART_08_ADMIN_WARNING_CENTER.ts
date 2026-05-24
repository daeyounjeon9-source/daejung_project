export type AdminAlertLevel = 'INFO' | 'WATCH' | 'WARNING' | 'CRITICAL' | 'OMEGA';

export interface AdminAlert {
  id: string;
  level: AdminAlertLevel;
  title: string;
  message: string;
  createdAt: string;
  resolved: boolean;
  requiredAction: string;
}

export const adminWarningCenter: AdminAlert[] = [
  {
    id: 'risk-accounting-001',
    level: 'CRITICAL',
    title: '정산/회계 증빙 확인 필요',
    message: '정산 확정 전 주문, 결제, 환불, 수수료, 세금계산서 자료를 대조해야 합니다.',
    createdAt: new Date().toISOString(),
    resolved: false,
    requiredAction: '관리자와 회계 담당자가 증빙 원장을 확인하세요.'
  },
  {
    id: 'security-login-001',
    level: 'WARNING',
    title: '관리자 접근 보안 점검',
    message: 'OTP 미적용 환경에서는 접근 기록, IP, 실패 횟수 제한을 반드시 사용해야 합니다.',
    createdAt: new Date().toISOString(),
    resolved: false,
    requiredAction: '관리자 로그인 로그와 실패 제한 정책을 확인하세요.'
  },
  {
    id: 'founder-rule-001',
    level: 'OMEGA',
    title: '창업자 최종 확인 필요',
    message: '중대한 운영·정산·고객정보 정책 변경은 창업자 확인 후 적용해야 합니다.',
    createdAt: new Date().toISOString(),
    resolved: false,
    requiredAction: '최종 승인 절차를 진행하세요.'
  }
];

export function getUnresolvedCriticalAlerts() {
  return adminWarningCenter.filter(
    alert => !alert.resolved && (alert.level === 'CRITICAL' || alert.level === 'OMEGA')
  );
}
