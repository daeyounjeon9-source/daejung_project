const menus = [
  "홈", "라이브", "쇼핑", "장바구니", "주문내역", "찜 목록", "코인 충전", "내 정보"
];

const aiMenus = [
  "AI 추천 상품", "AI 가격 분석", "AI 상품 검색", "AI 라이브 요약", "AI 고객센터"
];

export default function SideMenu() {
  return (
    <aside className="sideMenu">
      <div className="profileBox">
        <div className="avatar">AI</div>
        <div>
          <strong>AI HOST</strong>
          <p>VIP 회원 · 9,870 코인</p>
        </div>
      </div>

      <div className="menuList">
        {menus.map((m, i) => (
          <button className={i === 0 ? "active" : ""} key={m}>{m}</button>
        ))}
      </div>

      <div className="shortcutTitle">AI SHORTCUT</div>

      <div className="menuList mini">
        {aiMenus.map((m) => (
          <button key={m}>{m}</button>
        ))}
      </div>
    </aside>
  );
}