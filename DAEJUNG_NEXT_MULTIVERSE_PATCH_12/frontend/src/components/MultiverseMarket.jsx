
const products = [
  "NEXT AI ENGINE",
  "GLOBAL VR HUB",
  "ULTRA GLASS",
  "STREAM BOX",
  "AI MOBILE",
  "NEXT WATCH",
  "AI TABLET",
  "WORLD CORE",
  "AI SCREEN",
  "NEXT HUB",
  "ULTRA STREAM",
  "AI CONSOLE",
  "GLOBAL DEVICE",
  "NEXT AI SOUND",
  "STREAM ENGINE",
  "AI WORLD HUB",
  "NEXT MOBILE CORE",
  "ULTRA BOX",
  "AI SYSTEM CORE",
  "NEXT WORLD STREAM"
];

export default function MultiverseMarket() {
  return (
    <section className="multiverse-market">
      {products.map((item, index) => (
        <div className="multiverse-item" key={index}>
          <div className="multiverse-thumb"></div>

          <h2>{item}</h2>

          <span>₩188,000,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
