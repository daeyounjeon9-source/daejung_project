const ranking = [
  "AI 스마트 워치",
  "프리미엄 세럼",
  "무선 이어폰",
  "AI 의자",
  "스마트 청소기"
];

export default function PremiumRanking(){
  return (
    <section className="premiumRanking">
      <h2>실시간 인기 랭킹</h2>

      {ranking.map((item,index)=>(
        <div className="rankItem" key={item}>
          <strong>{index+1}</strong>
          <span>{item}</span>
        </div>
      ))}
    </section>
  );
}