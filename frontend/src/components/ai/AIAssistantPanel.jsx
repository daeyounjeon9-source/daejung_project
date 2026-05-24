const recs = [
  ["프리미엄 한방 세럼", "26,500원"],
  ["AI 스마트 체중계", "69,900원"],
  ["무선 블루투스 이어폰", "38,900원"],
];

export default function AIAssistantPanel() {
  return (
    <div className="rightStack">
      <section className="aiRecommend">
        <h2>AI 실시간 추천</h2>
        {recs.map(([name, price], idx) => (
          <div className="recItem" key={name}>
            <div className={"recImg rec" + idx}></div>
            <div>
              <strong>{name}</strong>
              <p>{price}</p>
            </div>
          </div>
        ))}
        <button>더 많은 AI 추천 보기</button>
      </section>

      <section className="aiChat">
        <div className="online">ONLINE</div>
        <h2>AI 상담 도우미</h2>
        <p>안녕하세요. 실시간으로 궁금한 내용을 도와드릴게요.</p>
        <div className="chatButtons">
          <button>주문 조회</button>
          <button>환불 문의</button>
          <button>상품 추천</button>
          <button>코인 충전</button>
        </div>
        <button className="talk">AI와 대화하기</button>
      </section>
    </div>
  );
}