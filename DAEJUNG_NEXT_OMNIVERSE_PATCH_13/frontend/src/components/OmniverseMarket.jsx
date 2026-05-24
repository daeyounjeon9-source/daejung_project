
const items = Array.from({length: 12}).map((_,i)=>(
  "AI PRODUCT " + (i+1)
));

export default function OmniverseMarket() {
  return (
    <section className="market">
      {items.map((it,i)=>(
        <div className="item" key={i}>
          <div className="img"/>
          <h2>{it}</h2>
          <span>₩99,000,000</span>
          <button>BUY</button>
        </div>
      ))}
    </section>
  );
}
