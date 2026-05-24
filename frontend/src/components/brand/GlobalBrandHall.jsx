const brands = [
  "APPLE",
  "SAMSUNG",
  "NIKE",
  "SONY",
  "TESLA",
  "GUCCI"
];

export default function GlobalBrandHall(){
  return (
    <section className="globalBrandHall">
      <h2>GLOBAL BRAND HALL</h2>

      <div className="brandGrid">
        {brands.map((brand)=>(
          <div className="brandCard" key={brand}>
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}