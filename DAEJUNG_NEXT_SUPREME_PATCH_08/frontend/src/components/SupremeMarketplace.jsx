
const products = [
  "NEXT AI ENGINE",
  "SMART GLASS",
  "AI STREAM HUB",
  "GLOBAL VR",
  "PREMIUM AI WATCH",
  "ULTRA SOUND",
  "NEXT AI SCREEN",
  "AI MOBILE CORE",
  "NEXT STREAM BOX",
  "GLOBAL TABLET",
  "SMART HUB",
  "ULTRA AI DEVICE"
];

export default function SupremeMarketplace() {
  return (
    <section className="supreme-market">
      {products.map((item, index) => (
        <div className="market-item" key={index}>
          <div className="market-thumb"></div>

          <h2>{item}</h2>

          <span>₩4,820,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
