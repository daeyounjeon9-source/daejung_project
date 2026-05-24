const lives = [
  "SEOUL LIVE",
  "TOKYO LIVE",
  "NEW YORK LIVE",
  "SINGAPORE LIVE"
];

export default function GlobalLiveWall(){
  return (
    <section className="globalLiveWall">
      <h2>GLOBAL LIVE WALL</h2>

      <div className="liveWallGrid">
        {lives.map((item)=>(
          <div className="liveWallCard" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}