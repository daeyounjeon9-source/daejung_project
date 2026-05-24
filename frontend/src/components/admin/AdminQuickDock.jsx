const items = ["라이브 시작", "상품 등록", "주문 관리", "정산 현황", "고객 관리", "통계 분석", "AI 분석", "마케팅 관리"];

export default function AdminQuickDock() {
  return (
    <section className="quickDock">
      <h2>빠른 운영 메뉴</h2>
      <div className="dockGrid">
        {items.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </section>
  );
}