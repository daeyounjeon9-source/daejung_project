export type SettlementStatus = 'PENDING' | 'LOCKED' | 'APPROVED' | 'PAID' | 'REVERSED';

export type SettlementLedgerItem = {
  orderId: string;
  sellerId: string;
  grossAmount: number;
  platformFee: number;
  refundAmount: number;
  taxAmount: number;
  coinUsed: number;
  pointUsed: number;
  finalPayable: number;
  status: SettlementStatus;
  evidenceId: string;
  createdAt: string;
};

export function calculateSettlement(input: Omit<SettlementLedgerItem, 'finalPayable' | 'status' | 'createdAt'>): SettlementLedgerItem {
  const finalPayable = Math.max(0, input.grossAmount - input.platformFee - input.refundAmount - input.taxAmount - input.coinUsed - input.pointUsed);
  return {
    ...input,
    finalPayable,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
  };
}

export function requireEvidence(item: SettlementLedgerItem): void {
  if (!item.evidenceId) throw new Error('정산 증빙 ID가 필요합니다.');
  if (item.finalPayable < 0) throw new Error('정산 지급액은 음수가 될 수 없습니다.');
}
