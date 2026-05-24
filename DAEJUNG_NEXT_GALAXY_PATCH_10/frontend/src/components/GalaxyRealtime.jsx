
const data = [
  {
    title: "GLOBAL 거래량",
    value: "₩188T"
  },
  {
    title: "AI 분석량",
    value: "488B"
  },
  {
    title: "실시간 방송",
    value: "4.2M"
  },
  {
    title: "GLOBAL USER",
    value: "1.8B"
  }
];

export default function GalaxyRealtime() {
  return (
    <section className="galaxy-grid">
      {data.map((item, index) => (
        <div className="galaxy-card" key={index}>
          <span>{item.title}</span>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}
