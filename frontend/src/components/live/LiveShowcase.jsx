const lives = [
  ["뷰티 특가 라이브", "AI HOST", "8,231"],
  ["오늘의 간편 요리", "쿠킹마스터", "5,421"],
  ["IT 신제품 리뷰", "테크리뷰어", "3,272"],
  ["패션 특가 라이브", "스타일리스트", "2,155"],
  ["스포츠 용품 특가", "스포츠가이", "1,287"],
];

export default function LiveShowcase() {
  return (
    <section className="sectionBox">
      <div className="sectionHead">
        <h2>실시간 LIVE</h2>
        <button>더보기</button>
      </div>

      <div className="liveGrid">
        {lives.map(([title, host, viewers], idx) => (
          <article className="liveCard" key={title}>
            <div className={"liveThumb thumb" + idx}>
              <span className="liveLabel">LIVE</span>
              <span className="viewer">{viewers}</span>
            </div>
            <h3>{title}</h3>
            <p>{host} · 좋아요 {Math.floor(700 + idx * 420)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}