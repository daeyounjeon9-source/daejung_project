
const stats = [
  { title: "GLOBAL TRADE", value: "₩9.8Q" },
  { title: "AI POWER", value: "88Q" },
  { title: "LIVE USERS", value: "8.8B" },
  { title: "STREAMS", value: "88M" }
];

export default function OmniverseStats() {
  return (
    <section className="omniverse-grid">
      {stats.map((s,i)=>(
        <div className="card" key={i}>
          <span>{s.title}</span>
          <h2>{s.value}</h2>
        </div>
      ))}
    </section>
  );
}
