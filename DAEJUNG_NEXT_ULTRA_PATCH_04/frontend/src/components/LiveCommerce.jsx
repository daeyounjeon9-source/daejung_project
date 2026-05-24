
const items = [
  "AI DEVICE",
  "SMART HUB",
  "VR SYSTEM",
  "NEXT WATCH",
  "ULTRA MOBILE",
  "PREMIUM AI"
];

export default function LiveCommerce() {
  return (
    <section className="commerce-grid">
      {items.map((item, index) => (
        <div className="commerce-card" key={index}>
          <div className="commerce-image"></div>

          <h2>{item}</h2>

          <span>₩980,000</span>

          <button>BUY NOW</button>
        </div>
      ))}
    </section>
  );
}
