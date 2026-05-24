const studios = [
  "뷰티 LIVE",
  "푸드 LIVE",
  "패션 LIVE",
  "IT LIVE"
];

export default function RealtimeLiveStudio(){
  return (
    <section className="realtimeStudio">
      <h2>REALTIME LIVE STUDIO</h2>

      <div className="studioGrid">
        {studios.map((item)=>(
          <div className="studioCard" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}