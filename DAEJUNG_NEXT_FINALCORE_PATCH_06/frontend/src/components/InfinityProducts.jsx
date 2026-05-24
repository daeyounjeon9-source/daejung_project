
const products = [
  "NEXT AI DEVICE",
  "ULTRA VR",
  "AI STREAM HUB",
  "PREMIUM MOBILE",
  "SMART GLASS",
  "AI WATCH",
  "NEXT SCREEN",
  "AI SOUND",
  "ULTRA HUB",
  "NEXT BOX",
  "AI SYSTEM",
  "PREMIUM CORE"
];

export default function InfinityProducts() {
  return (
    <section className="products-grid">
      {products.map((item, index) => (
        <div className="product-box" key={index}>
          <div className="product-thumb"></div>

          <h2>{item}</h2>

          <span>₩1,880,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
