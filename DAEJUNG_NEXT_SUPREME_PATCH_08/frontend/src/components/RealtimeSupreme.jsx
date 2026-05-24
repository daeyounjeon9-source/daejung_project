
const realtime = [
  {
    title: "실시간 글로벌 거래",
    value: "₩8.28T"
  },
  {
    title: "AI 분석량",
    value: "12.8B"
  },
  {
    title: "실시간 방송",
    value: "284,000"
  },
  {
    title: "글로벌 접속",
    value: "188M"
  }
];

export default function RealtimeSupreme() {
  return (
    <section className="supreme-grid">
      {realtime.map((item, index) => (
        <div className="supreme-card" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
