import React from "react";

const rows = [
  { label: "미확정 정산", value: "12건", risk: "검토 필요" },
  { label: "보류 정산", value: "3건", risk: "증빙 확인" },
  { label: "환불 반영", value: "8건", risk: "자동 반영" },
  { label: "세금계산 기초자료", value: "정상", risk: "월말 잠금 전" }
];

export default function SettlementLegalAdminPanel() {
  return (
    <section className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-2xl font-bold mb-2">정산·회계·법무 안전 패널</h2>
      <p className="text-sm text-gray-600 mb-4">주문, 환불, 수수료, 세금, 증빙자료를 분리 관리합니다.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {rows.map((row) => (
          <div key={row.label} className="border rounded-xl p-4">
            <div className="text-sm text-gray-500">{row.label}</div>
            <div className="text-xl font-bold mt-1">{row.value}</div>
            <div className="text-xs mt-2">{row.risk}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
