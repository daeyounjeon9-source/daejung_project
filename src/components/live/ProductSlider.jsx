const items = [
  "프리미엄 스마트 디바이스",
  "AI 홈 시스템",
  "미래형 웨어러블",
  "프리미엄 라이프 패키지"
];

export default function ProductSlider() {
  return (
    <div className="product-slider">
      {items.map((item) => (
        <div className="product-card" key={item}>
          <div className="thumb"></div>
          <h4>{item}</h4>
          <button>즉시 구매</button>
        </div>
      ))}
    </div>
  );
}