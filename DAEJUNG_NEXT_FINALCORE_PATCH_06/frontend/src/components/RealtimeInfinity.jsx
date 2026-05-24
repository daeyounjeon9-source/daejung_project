
const cards = [
  {
    title: "실시간 글로벌 거래",
    value: "₩882.4B"
  },
  {
    title: "AI 분석량",
    value: "982.1M"
  },
  {
    title: "LIVE 송출",
    value: "12,480"
  },
  {
    title: "글로벌 접속",
    value: "28.4M"
  }
];

export default function RealtimeInfinity() {
  return (
    <section className="infinity-grid">
      {cards.map((item, index) => (
        <div className="infinity-box" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
