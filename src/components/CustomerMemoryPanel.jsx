import {
  clearCustomerMemory,
  getAdminInsight,
  getRecommendedLive,
  getRecommendedProducts,
  getTopCategories,
  trackProductView,
  trackSearch,
} from "../lib/customerMemoryEngine";
import { useMemo, useState } from "react";

const sampleSearches = ["홍삼", "운동화", "쌀", "청소기", "단백질", "홈트"];

export default function CustomerMemoryPanel({ memory, setMemory }) {
  const [keyword, setKeyword] = useState("");
  const topCategories = useMemo(() => getTopCategories(memory), [memory]);
  const products = useMemo(() => getRecommendedProducts(memory), [memory]);
  const live = useMemo(() => getRecommendedLive(memory), [memory]);
  const admin = useMemo(() => getAdminInsight(memory), [memory]);

  const submitSearch = (value = keyword) => {
    const next = trackSearch(value);
    setMemory(next);
    setKeyword("");
  };

  return (
    <main className="memory-grid">
      <section className="hero-panel">
        <span className="badge">Customer Memory AI Engine</span>
        <h1>구매 전 검색 고객까지 기억하는 대정넥스트 추천 시스템</h1>
        <p>
          고객이 구매하지 않아도 검색·조회·체류 데이터를 점수화해 다음 접속 때 상품, LIVE, 쿠폰,
          LIVON 코인 혜택을 자동 추천합니다.
        </p>

        <div className="search-box">
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") submitSearch();
            }}
            placeholder="예: 홍삼, 운동화, 쌀, 청소기"
          />
          <button onClick={() => submitSearch()}>검색 기록 적용</button>
        </div>

        <div className="quick-tags">
          {sampleSearches.map((item) => (
            <button key={item} onClick={() => submitSearch(item)}>
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="live-panel">
        <span className="live-dot" />
        <b>AI LIVE 추천</b>
        <h2>{live.title}</h2>
        <p>{live.subtitle}</p>
        <strong>{live.benefit}</strong>
        <small>AI 관심 점수 {live.score}</small>
      </section>

      <section className="card-panel wide">
        <div className="panel-title">
          <div>
            <span className="badge">Personalized Products</span>
            <h2>재접속 맞춤 추천 상품</h2>
          </div>
          <button className="reset-btn" onClick={() => setMemory(clearCustomerMemory())}>
            기록 초기화
          </button>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.reason}</p>
              <b>{product.price}</b>
              <button onClick={() => setMemory(trackProductView(product, 35))}>
                상세보기 기록 + 체류시간 반영
              </button>
              <small>{product.tag} · AI {product.aiScore}점</small>
            </article>
          ))}
        </div>
      </section>

      <section className="card-panel">
        <span className="badge">Interest Score</span>
        <h2>관심 카테고리 점수</h2>
        <div className="score-list">
          {topCategories.length === 0 ? (
            <p className="empty">아직 검색 기록이 없습니다.</p>
          ) : (
            topCategories.map((item) => (
              <div className="score-row" key={item.category}>
                <span>{item.category}</span>
                <div>
                  <i style={{ width: `${Math.min(item.score, 100)}%` }} />
                </div>
                <b>{item.score}</b>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="card-panel admin-panel">
        <span className="badge">Admin Insight</span>
        <h2>관리자 추천 분석</h2>
        <dl>
          <dt>방문자 ID</dt>
          <dd>{admin.visitorId}</dd>
          <dt>행태정보 동의</dt>
          <dd>{admin.consent ? "동의 완료" : "동의 전/거부"}</dd>
          <dt>검색 수</dt>
          <dd>{admin.totalSearches}</dd>
          <dt>상품 조회 수</dt>
          <dd>{admin.totalViews}</dd>
          <dt>최근 핵심 검색어</dt>
          <dd>{admin.topKeyword}</dd>
          <dt>구매 전환 가능성</dt>
          <dd>{admin.conversionPotential}</dd>
          <dt>다음 조치</dt>
          <dd>{admin.nextAction}</dd>
        </dl>
      </section>
    </main>
  );
}
