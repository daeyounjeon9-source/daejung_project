const products = [
  { title: "프리미엄 AI 디바이스", price: "₩1,280,000" },
  { title: "스마트 홈 시스템", price: "₩890,000" },
  { title: "NEXT VR PACKAGE", price: "₩2,400,000" },
];

export default function ProductSlider() {
  return (
    <div className="product-slider">
      {products.map((item, index) => (
        <div className="product-card" key={index}>
          <div className="product-image"></div>
          <h2>{item.title}</h2>
          <span>{item.price}</span>
          <button>바로 구매</button>
        </div>
      ))}
    </div>
  );
}
