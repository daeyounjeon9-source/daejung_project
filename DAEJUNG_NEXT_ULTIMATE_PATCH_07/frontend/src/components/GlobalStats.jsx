
const stats = [
  {
    title: "실시간 글로벌 거래",
    value: "₩1.82T"
  },
  {
    title: "AI 분석량",
    value: "2.84B"
  },
  {
    title: "실시간 LIVE",
    value: "82,400"
  },
  {
    title: "글로벌 사용자",
    value: "82.1M"
  }
];

export default function GlobalStats() {
  return (
    <section className="global-stats">
      {stats.map((item, index) => (
        <div className="stats-panel" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
