import React from 'react';

export default function AdminOmegaPanel() {
  return (
    <section style={{ padding: 24, borderRadius: 24, background: '#080b14', color: 'white' }}>
      <h1>DAEJUNG NEXT 관리자 OMEGA PANEL</h1>
      <p>접근 등급, OTP, 정산 감사 로그, 위험 경고를 통합 관리합니다.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        <div>보안 상태: LOCKED</div>
        <div>정산 상태: AUDIT READY</div>
        <div>위험도: MONITORING</div>
        <div>권한: OMEGA_BLACK</div>
      </div>
    </section>
  );
}
