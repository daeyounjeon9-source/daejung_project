const brands = [
  "APPLE",
  "TESLA",
  "SAMSUNG",
  "NIKE",
  "SONY",
  "GUCCI"
];

export default function GlobalBrandSlider(){
  return (
    <section className="globalBrandSlider">
      <h2>GLOBAL BRAND WORLD</h2>

      <div className="brandSliderTrack">
        {brands.map((brand)=>(
          <div className="brandSlide" key={brand}>
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}