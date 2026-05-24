export type AdminGrade = 'OMEGA_BLACK' | 'FINANCE_LOCK' | 'OPERATION_ADMIN' | 'VIEW_ONLY';

export type AdminAccessInput = {
  adminId: string;
  passwordOk: boolean;
  otpOk: boolean;
  grade: AdminGrade;
};

export type AdminAccessResult = {
  allowed: boolean;
  reason: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
};

export function checkAdminAccess(input: AdminAccessInput): AdminAccessResult {
  if (!input.adminId) return { allowed: false, reason: '관리자 ID 누락', riskLevel: 'HIGH' };
  if (!input.passwordOk) return { allowed: false, reason: '비밀번호 인증 실패', riskLevel: 'HIGH' };
  if (!input.otpOk) return { allowed: false, reason: 'OTP 인증 실패', riskLevel: 'CRITICAL' };
  if (input.grade === 'VIEW_ONLY') return { allowed: true, reason: '조회 전용 접근 허용', riskLevel: 'LOW' };
  return { allowed: true, reason: '관리자 접근 허용', riskLevel: input.grade === 'OMEGA_BLACK' ? 'MEDIUM' : 'LOW' };
}

export function adminSecurityWarning(actionName: string): string {
  return `주의: ${actionName} 작업은 감사 로그에 기록되며 법적·세무적 책임이 발생할 수 있습니다.`;
}
