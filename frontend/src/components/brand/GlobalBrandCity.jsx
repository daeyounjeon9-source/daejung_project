const brands = ["APPLE","TESLA","SONY","NIKE","SAMSUNG","GUCCI"];

export default function GlobalBrandCity(){
  return (
    <section className="globalBrandCity">
      <h2>GLOBAL BRAND CITY</h2>

      <div className="brandCityGrid">
        {brands.map((brand)=>(
          <div className="brandTower" key={brand}>
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}