export default function TopNav() {
  return (
    <header className="topNav">
      <div className="brandWrap">
        <div className="brandMark">D</div>
        <div className="brandText">DAEJUNG<span>NEXT</span></div>
      </div>

      <div className="searchBox">
        <input placeholder="상품, 라이브, 브랜드 검색" />
        <button>검색</button>
      </div>

      <nav className="mainNav">
        <a>홈</a>
        <a>LIVE</a>
        <a>쇼핑</a>
        <a>AI 추천</a>
        <a>멤버십</a>
      </nav>

      <button className="liveStart">LIVE 시작</button>
    </header>
  );
}