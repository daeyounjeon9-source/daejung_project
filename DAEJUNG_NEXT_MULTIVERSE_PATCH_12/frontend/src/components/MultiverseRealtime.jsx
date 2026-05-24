
const stats = [
  {
    title: "GLOBAL 거래",
    value: "₩4.8Q"
  },
  {
    title: "AI 분석량",
    value: "18Q"
  },
  {
    title: "실시간 방송",
    value: "188M"
  },
  {
    title: "GLOBAL USER",
    value: "18B"
  }
];

export default function MultiverseRealtime() {
  return (
    <section className="multiverse-grid">
      {stats.map((item, index) => (
        <div className="multiverse-card" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
