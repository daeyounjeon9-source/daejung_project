
const cards = [
  {
    title: "실시간 거래량",
    value: "₩248.9B"
  },
  {
    title: "AI 처리량",
    value: "188.2M"
  },
  {
    title: "실시간 LIVE",
    value: "1,248"
  },
  {
    title: "글로벌 사용자",
    value: "8.2M"
  }
];

export default function RealtimeCards() {
  return (
    <section className="cards-grid">
      {cards.map((item, index) => (
        <div className="card-box" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
