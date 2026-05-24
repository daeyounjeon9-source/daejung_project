const products = [
  "AI SMART WATCH",
  "PREMIUM SERUM",
  "SMART CHAIR",
  "WIRELESS AUDIO"
];

export default function GlobalShoppingZone(){
  return (
    <section className="globalShoppingZone">
      <h2>GLOBAL SHOPPING</h2>

      <div className="globalGrid">
        {products.map((item)=>(
          <div className="globalCard" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}