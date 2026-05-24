const products = [
  "AI SMART WATCH",
  "PREMIUM BEAUTY SERUM",
  "ULTRA WIRELESS AUDIO",
  "SMART HOME CHAIR"
];

export default function RealProductCards(){
  return (
    <section className="realProductCards">
      <h2>REAL PRODUCT SHOWCASE</h2>

      <div className="productShowGrid">
        {products.map((item)=>(
          <div className="realCard" key={item}>
            <div className="productImageMock"></div>
            <strong>{item}</strong>
            <button>BUY NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
}