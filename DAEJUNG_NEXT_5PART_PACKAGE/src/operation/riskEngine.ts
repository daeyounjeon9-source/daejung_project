export type RiskSignal = {
  code: string;
  message: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
};

export function evaluateOperationalRisk(input: {
  failedLoginCount: number;
  manualSettlementChange: boolean;
  bankAccountChanged: boolean;
  refundSpike: boolean;
}): RiskSignal[] {
  const signals: RiskSignal[] = [];
  if (input.failedLoginCount >= 5) signals.push({ code: 'ADMIN_LOGIN_FAIL_SPIKE', message: '관리자 로그인 실패가 반복되었습니다.', severity: 'HIGH' });
  if (input.manualSettlementChange) signals.push({ code: 'MANUAL_SETTLEMENT_CHANGE', message: '정산 수동 변경은 승인과 증빙이 필요합니다.', severity: 'CRITICAL' });
  if (input.bankAccountChanged) signals.push({ code: 'BANK_ACCOUNT_CHANGED', message: '판매자 계좌 변경은 2인 승인이 필요합니다.', severity: 'CRITICAL' });
  if (input.refundSpike) signals.push({ code: 'REFUND_SPIKE', message: '환불 증가 패턴을 점검해야 합니다.', severity: 'HIGH' });
  return signals;
}
