export default function PremiumStats() {
  const stats = [
    { title: "실시간 거래", value: "₩9.8B" },
    { title: "AI 분석량", value: "12.4M" },
    { title: "LIVE 연결", value: "2,481" },
    { title: "보안 상태", value: "SAFE" },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <span>{item.title}</span>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>
  );
}
