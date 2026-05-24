const products = [
  ["프리미엄 비타민C 세럼", "28,000원", "20,500원", "27%"],
  ["AI 스마트 의자", "198,000원", "136,000원", "31%"],
  ["노이즈캔슬링 이어폰", "89,000원", "66,500원", "25%"],
  ["AI 스마트 워치", "249,000원", "149,000원", "40%"],
  ["무선 청소기 MAX", "129,000원", "99,900원", "22%"],
  ["수분 진정 크림", "35,000원", "24,500원", "30%"],
];

export default function ProductMall() {
  return (
    <section className="sectionBox">
      <div className="sectionHead">
        <h2>오늘의 추천 상품</h2>
        <button>더보기</button>
      </div>

      <div className="productGrid">
        {products.map(([name, oldPrice, price, sale], idx) => (
          <article className="productCard" key={name}>
            <div className={"productImage product" + idx}>
              <span>{sale}</span>
            </div>
            <h3>{name}</h3>
            <p><del>{oldPrice}</del></p>
            <strong>{price}</strong>
            <button>바로 구매</button>
          </article>
        ))}
      </div>
    </section>
  );
}