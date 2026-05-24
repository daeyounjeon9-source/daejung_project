export default function ViewerStats() {
  return (
    <div className="viewer-box">
      <h3>실시간 현황</h3>

      <div className="stat">
        <span>현재 시청자</span>
        <strong>128,421</strong>
      </div>

      <div className="stat">
        <span>실시간 주문</span>
        <strong>4,892</strong>
      </div>

      <div className="stat">
        <span>LIVON 사용량</span>
        <strong>2,941,000</strong>
      </div>
    </div>
  );
}