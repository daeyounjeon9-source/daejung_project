
export default function AdminPanel() {
  return (
    <div className="admin-panel">
      <h2>ADMIN CONTROL</h2>

      <div className="admin-grid">
        <div>
          <span>서버 상태</span>
          <h3>NORMAL</h3>
        </div>

        <div>
          <span>AI 상태</span>
          <h3>ACTIVE</h3>
        </div>

        <div>
          <span>보안 레벨</span>
          <h3>MAX</h3>
        </div>

        <div>
          <span>트래픽</span>
          <h3>2.8TB</h3>
        </div>
      </div>
    </div>
  );
}
