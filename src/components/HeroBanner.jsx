export default function HeroBanner({ onLiveClick, onAdminClick }) {
  return (
    <section className="hero-banner">
      <div className="hero-left">
        <span className="hero-pill">HOMESHOP MAIN</span>
        <h1>DAEJUNG NEXT<br/>HOMESHOP</h1>
        <p>실제 홈쇼핑 메인 UI 테스트</p>
        <div className="hero-actions">
          <button onClick={onLiveClick}>라이브 입장</button>
          <button onClick={onAdminClick} className="ghost">관리자 이동</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="floating-card">
          <span>LIVE NOW</span>
          <h3>방송 진행중</h3>
          <p>실시간 스트리밍 테스트</p>
        </div>
      </div>
    </section>
  );
}