
const realtime = [
  {
    title: "GLOBAL 거래",
    value: "₩28.4T"
  },
  {
    title: "AI 분석",
    value: "82.8B"
  },
  {
    title: "실시간 LIVE",
    value: "882,000"
  },
  {
    title: "글로벌 사용자",
    value: "488M"
  }
];

export default function WorldRealtime() {
  return (
    <section className="world-grid">
      {realtime.map((item, index) => (
        <div className="world-card" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
