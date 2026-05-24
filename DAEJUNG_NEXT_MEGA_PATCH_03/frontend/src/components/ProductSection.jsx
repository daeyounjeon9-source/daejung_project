
const items = [
  "AI DEVICE",
  "SMART GLASS",
  "VR PACKAGE",
  "PREMIUM SYSTEM",
  "NEXT MOBILE",
  "ULTRA AI HUB",
];

export default function ProductSection() {
  return (
    <section className="product-section">
      {items.map((item, i) => (
        <div className="product-card" key={i}>
          <div className="product-image"></div>

          <h2>{item}</h2>

          <span>₩1,280,000</span>

          <button>구매하기</button>
        </div>
      ))}
    </section>
  );
}
