
const items = [
  "NEXT AI DEVICE",
  "SMART GLASS",
  "ULTRA VR",
  "AI HUB",
  "PREMIUM MOBILE",
  "NEXT WATCH",
  "AI SCREEN",
  "STREAM BOX",
  "NEXT SOUND"
];

export default function InfiniteProducts() {
  return (
    <section className="infinite-grid">
      {items.map((item, index) => (
        <div className="infinite-card" key={index}>
          <div className="infinite-image"></div>

          <h2>{item}</h2>

          <span>₩1,280,000</span>

          <button>PURCHASE</button>
        </div>
      ))}
    </section>
  );
}
