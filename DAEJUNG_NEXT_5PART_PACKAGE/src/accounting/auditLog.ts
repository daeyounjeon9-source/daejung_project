export type AuditLog = {
  id: string;
  actorId: string;
  action: string;
  targetId: string;
  before?: unknown;
  after?: unknown;
  reason: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  createdAt: string;
};

export function createAuditLog(log: Omit<AuditLog, 'id' | 'createdAt'>): AuditLog {
  if (!log.actorId || !log.action || !log.targetId || !log.reason) {
    throw new Error('감사 로그 필수값 누락');
  }
  return {
    ...log,
    id: `AUDIT-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
}
