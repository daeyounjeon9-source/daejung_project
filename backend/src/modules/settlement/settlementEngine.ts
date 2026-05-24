export type SettlementStatus = "PENDING" | "CONFIRMED" | "HELD" | "PAID" | "DISPUTED" | "CANCELLED";

export interface SettlementRecord {
  orderId: string;
  sellerId: string;
  grossAmount: number;
  platformFee: number;
  paymentFee: number;
  refundAmount: number;
  taxBaseAmount: number;
  vatAmount: number;
  netPayable: number;
  status: SettlementStatus;
  evidenceHash: string;
  createdAt: string;
  confirmedAt?: string;
}

export function calculateSettlement(input: {
  orderId: string;
  sellerId: string;
  grossAmount: number;
  platformFeeRate: number;
  paymentFeeRate: number;
  refundAmount?: number;
  vatRate?: number;
}): SettlementRecord {
  const refundAmount = input.refundAmount ?? 0;
  const vatRate = input.vatRate ?? 0.1;
  const effectiveAmount = Math.max(input.grossAmount - refundAmount, 0);
  const platformFee = Math.round(effectiveAmount * input.platformFeeRate);
  const paymentFee = Math.round(effectiveAmount * input.paymentFeeRate);
  const taxBaseAmount = Math.round(effectiveAmount / (1 + vatRate));
  const vatAmount = effectiveAmount - taxBaseAmount;
  const netPayable = effectiveAmount - platformFee - paymentFee;

  return {
    orderId: input.orderId,
    sellerId: input.sellerId,
    grossAmount: input.grossAmount,
    platformFee,
    paymentFee,
    refundAmount,
    taxBaseAmount,
    vatAmount,
    netPayable,
    status: "PENDING",
    evidenceHash: `EV-${input.orderId}-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
}
