const menus = [
  "회원관리",
  "주문관리",
  "LIVE관리",
  "매출분석",
  "AI분석",
  "보안관리"
];

export default function EnterpriseAdminGrid(){
  return (
    <section className="enterpriseAdminGrid">
      <h2>ENTERPRISE ADMIN</h2>

      <div className="adminGrid">
        {menus.map((menu)=>(
          <button key={menu}>
            {menu}
          </button>
        ))}
      </div>
    </section>
  );
}