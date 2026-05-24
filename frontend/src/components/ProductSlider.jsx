const items=["상품1","상품2","상품3","상품4"];
export default function ProductSlider(){
  return (<section className="product-slider">
    <div className="section-head"><span>SHOPPING</span><h2>추천 상품</h2></div>
    <div className="slider-grid">{items.map((item,i)=>(<div className="slider-card" key={i}>
      <div className="image-placeholder" />
      <h3>{item}</h3>
      <p>특가 진행중</p>
      <button>구매</button>
    </div>))}</div>
  </section>);
}