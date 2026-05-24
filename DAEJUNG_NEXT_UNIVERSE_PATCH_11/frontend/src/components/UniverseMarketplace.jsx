
const products = [
  "AI CORE ENGINE",
  "GLOBAL VR HUB",
  "NEXT AI GLASS",
  "STREAM BOX",
  "SMART HUB",
  "AI MOBILE",
  "ULTRA SCREEN",
  "NEXT AI WATCH",
  "AI SOUND",
  "GLOBAL STREAM",
  "NEXT DEVICE",
  "ULTRA ENGINE",
  "AI CONSOLE",
  "STREAM CORE",
  "NEXT TABLET",
  "AI GLOBAL HUB",
  "WORLD CORE",
  "AI SYSTEM BOX"
];

export default function UniverseMarketplace() {
  return (
    <section className="universe-market">
      {products.map((item, index) => (
        <div className="universe-item" key={index}>
          <div className="universe-thumb"></div>

          <h2>{item}</h2>

          <span>₩48,820,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
