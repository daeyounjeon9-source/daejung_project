
const products = [
  "AI CORE HUB",
  "NEXT VR WORLD",
  "SMART STREAM",
  "AI WATCH",
  "ULTRA MOBILE",
  "AI GLASS",
  "STREAM BOX",
  "NEXT SOUND",
  "AI SCREEN",
  "GLOBAL HUB",
  "NEXT ENGINE",
  "ULTRA DEVICE",
  "AI CONSOLE",
  "NEXT TABLET",
  "GLOBAL AI CORE"
];

export default function WorldMarketplace() {
  return (
    <section className="world-market">
      {products.map((item, index) => (
        <div className="world-item" key={index}>
          <div className="world-thumb"></div>

          <h2>{item}</h2>

          <span>₩8,280,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
