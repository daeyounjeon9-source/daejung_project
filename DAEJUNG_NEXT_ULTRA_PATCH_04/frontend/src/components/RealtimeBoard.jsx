
const boards = [
  {
    title: "실시간 매출",
    value: "₩128.8B"
  },
  {
    title: "AI 처리량",
    value: "82.1M"
  },
  {
    title: "LIVE 상태",
    value: "ACTIVE"
  },
  {
    title: "동시접속",
    value: "2.8M"
  }
];

export default function RealtimeBoard() {
  return (
    <section className="realtime-grid">
      {boards.map((item, index) => (
        <div className="realtime-card" key={index}>
          <span>{item.title}</span>
          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
