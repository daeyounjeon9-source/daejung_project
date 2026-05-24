export default function RealtimeAdminStatus() {
  return (
    <section className="admin-status">
      <h2>실시간 관리자 상태</h2>

      <div className="status-grid">
        <div>
          <strong>서버 상태</strong>
          <p>정상 운영중</p>
        </div>

        <div>
          <strong>보안 상태</strong>
          <p>위협 없음</p>
        </div>

        <div>
          <strong>트래픽</strong>
          <p>초당 12,441 처리</p>
        </div>

        <div>
          <strong>LIVE 상태</strong>
          <p>24개 방송중</p>
        </div>
      </div>
    </section>
  );
}