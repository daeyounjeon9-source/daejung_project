
const data = [
  { title: "실시간 거래", value: "₩18.4B" },
  { title: "AI 분석량", value: "82.1M" },
  { title: "GLOBAL LIVE", value: "128" },
  { title: "실시간 사용자", value: "2.4M" },
];

export default function Stats() {
  return (
    <div className="stats-grid">
      {data.map((item, i) => (
        <div className="stats-card" key={i}>
          <span>{item.title}</span>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>
  );
}
