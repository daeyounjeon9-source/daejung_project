import React from 'react';
import './globals.css';

const liveProducts = [
  { name: 'AI 스마트 홈 패키지', price: '₩129,000', tag: 'LIVE 특가', rate: '98%' },
  { name: '프리미엄 생활가전 세트', price: '₩349,000', tag: '오늘만', rate: '94%' },
  { name: 'Livon Coin 리워드 박스', price: '3,900 LVC', tag: '코인전용', rate: '91%' },
];

const stats = [
  ['실시간 시청자', '24,891'],
  ['오늘 주문', '8,432'],
  ['AI 응대 처리', '97.8%'],
  ['보안 상태', '3중 보호 정상'],
];

export default function HomePage() {
  return (
    <main className="dn-root">
      <section className="dn-hero">
        <nav className="dn-nav">
          <div className="dn-logo">DAEJUNG NEXT</div>
          <div className="dn-nav-links">
            <span>LIVE</span><span>SHOP</span><span>AI GUIDE</span><span>COIN</span><span>ADMIN</span>
          </div>
        </nav>

        <div className="dn-hero-grid">
          <div className="dn-copy">
            <span className="dn-badge">NEXT LIVE COMMERCE PLATFORM</span>
            <h1>홈쇼핑을 넘어<br />AI 실시간 성장 플랫폼으로</h1>
            <p>
              대정넥스트는 라이브 쇼핑, AI 캐릭터 안내, 코인 리워드, 관리자 통계,
              3중 보안 구조를 하나로 연결한 미래형 커머스 운영 시스템입니다.
            </p>
            <div className="dn-actions">
              <button>라이브 바로보기</button>
              <button className="dn-secondary">운영 대시보드</button>
            </div>
          </div>

          <div className="dn-live-card">
            <div className="dn-live-top"><span className="dn-live-dot" /> LIVE ON AIR</div>
            <div className="dn-video-box">
              <div className="dn-host">AI HOST</div>
              <div className="dn-wave" />
              <p>“고객님, 지금 가장 반응이 좋은 상품을 추천드릴게요.”</p>
            </div>
            <div className="dn-mini-row">
              <span>실시간 구매전환</span><strong>18.7%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="dn-stats">
        {stats.map(([label, value]) => (
          <div className="dn-stat" key={label}>
            <span>{label}</span><strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="dn-section">
        <div className="dn-section-head">
          <h2>실시간 추천 상품</h2>
          <p>AI 분석 기반으로 구매 가능성이 높은 상품을 우선 노출합니다.</p>
        </div>
        <div className="dn-products">
          {liveProducts.map((item) => (
            <article className="dn-product" key={item.name}>
              <div className="dn-product-img">{item.tag}</div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="dn-product-bottom">
                <span>반응률 {item.rate}</span>
                <button>바로구매</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dn-system-grid">
        <div className="dn-panel">
          <h2>AI 캐릭터 안내</h2>
          <p>페이지마다 고객 응대, 상품 설명, 구매 유도, 불만 대응을 수행하는 자율형 AI 안내 구조.</p>
        </div>
        <div className="dn-panel">
          <h2>Livon Coin 연결</h2>
          <p>구매 리워드, 후원, 멤버십, 이벤트 지급, 내부 정산 구조까지 확장 가능한 코인 시스템.</p>
        </div>
        <div className="dn-panel">
          <h2>3중 보안 운영</h2>
          <p>접근 제어, 이상 징후 탐지, 거래 보호를 분리해 운영 리스크를 낮추는 보안 구조.</p>
        </div>
      </section>
    </main>
  );
}
