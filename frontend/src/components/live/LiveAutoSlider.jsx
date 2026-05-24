const items = [
  "GLOBAL BEAUTY LIVE",
  "PREMIUM TECH LIVE",
  "VIP FASHION LIVE",
  "FOOD LIVE EVENT"
];

export default function LiveAutoSlider(){
  return (
    <section className="liveAutoSlider">
      <h2>AUTO LIVE SLIDER</h2>

      <div className="autoSliderTrack">
        {items.map((item)=>(
          <div className="autoSlideCard" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}