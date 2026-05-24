
const stats = [
  {
    title: "GLOBAL 거래량",
    value: "₩882T"
  },
  {
    title: "AI 처리량",
    value: "1.2Q"
  },
  {
    title: "실시간 방송",
    value: "28.4M"
  },
  {
    title: "GLOBAL USER",
    value: "4.8B"
  }
];

export default function UniverseStats() {
  return (
    <section className="universe-grid">
      {stats.map((item, index) => (
        <div className="universe-card" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
