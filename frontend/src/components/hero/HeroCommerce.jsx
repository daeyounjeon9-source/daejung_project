export default function HeroCommerce() {
  return (
    <section className="heroCommerce">
      <div className="heroText">
        <div className="heroBadge">
          <span className="redDot"></span>
          LIVE COMMERCE ON AIR
        </div>

        <h1>
          AI HOST가 진행하는
          <br />
          프리미엄 라이브 홈쇼핑
        </h1>

        <p>
          실시간 방송, 즉시 구매, AI 추천, 코인 혜택까지 한 화면에서 연결되는
          DAEJUNG NEXT 메인 홈쇼핑 화면입니다.
        </p>

        <div className="heroButtons">
          <button>라이브 보러가기</button>
          <button className="ghost">오늘 특가 보기</button>
        </div>

        <div className="heroMetrics">
          <div><strong>12,540</strong><span>현재 시청자</span></div>
          <div><strong>35,247</strong><span>오늘 주문</span></div>
          <div><strong>99.8%</strong><span>AI 응답률</span></div>
        </div>
      </div>

      <div className="heroVisual">
        <div className="hostCard">
          <div className="hostFace">AI HOST</div>
          <div className="productShow">
            <span>오늘의 LIVE 상품</span>
            <strong>프리미엄 한방 세럼</strong>
            <p>32% 할인 · 26,500원</p>
          </div>
        </div>
      </div>
    </section>
  );
}