
export default function AdminRealtime() {
  return (
    <section className="admin-realtime">
      <h2>ADMIN CONTROL PANEL</h2>

      <div className="admin-status-grid">
        <div>
          <span>서버 상태</span>
          <h3>NORMAL</h3>
        </div>

        <div>
          <span>AI 상태</span>
          <h3>ACTIVE</h3>
        </div>

        <div>
          <span>트래픽</span>
          <h3>18.2TB</h3>
        </div>

        <div>
          <span>방어 시스템</span>
          <h3>SAFE</h3>
        </div>
      </div>
    </section>
  );
}
