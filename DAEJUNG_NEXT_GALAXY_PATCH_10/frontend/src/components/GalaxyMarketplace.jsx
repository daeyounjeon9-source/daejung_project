
const products = [
  "NEXT AI CORE",
  "SMART VR",
  "ULTRA GLASS",
  "GLOBAL STREAM HUB",
  "AI WATCH",
  "NEXT ENGINE",
  "STREAM BOX",
  "AI SCREEN",
  "GLOBAL MOBILE",
  "AI SOUND",
  "NEXT DEVICE",
  "ULTRA HUB",
  "AI CONSOLE",
  "GLOBAL TABLET",
  "STREAM CORE",
  "NEXT WORLD HUB"
];

export default function GalaxyMarketplace() {
  return (
    <section className="galaxy-market">
      {products.map((item, index) => (
        <div className="galaxy-item" key={index}>
          <div className="galaxy-thumb"></div>

          <h2>{item}</h2>

          <span>₩18,820,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
