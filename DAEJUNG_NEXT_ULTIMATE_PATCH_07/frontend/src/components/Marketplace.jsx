
const products = [
  "AI CORE DEVICE",
  "NEXT VR SYSTEM",
  "SMART AI HUB",
  "PREMIUM WATCH",
  "GLOBAL STREAM BOX",
  "NEXT AI SCREEN",
  "ULTRA SOUND",
  "SMART GLASS",
  "AI MOBILE",
  "NEXT TABLET",
  "AI ENGINE",
  "GLOBAL CORE"
];

export default function Marketplace() {
  return (
    <section className="market-grid">
      {products.map((item, index) => (
        <div className="market-card" key={index}>
          <div className="market-image"></div>

          <h2>{item}</h2>

          <span>₩2,480,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
