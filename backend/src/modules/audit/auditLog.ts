export interface AuditLogEntry {
  actorId: string;
  action: string;
  targetType: string;
  targetId: string;
  before?: unknown;
  after?: unknown;
  ip?: string;
  userAgent?: string;
  createdAt: string;
}

export function createAuditLog(entry: Omit<AuditLogEntry, "createdAt">): AuditLogEntry {
  return { ...entry, createdAt: new Date().toISOString() };
}

export const AUDIT_RETENTION_POLICY = {
  orderEvidenceYears: 5,
  settlementEvidenceYears: 5,
  adminAccessLogYears: 3,
  securityIncidentYears: 10
};
