
import { buildMasterStrategy, riskSystems } from "../lib/riskResponseEngine";

export default function RiskResponsePanel(){
  const strategy = buildMasterStrategy();

  return (
    <main className="shell">
      <section className="hero">
        <span className="badge">DAEJUNG NEXT MASTER RESPONSE SYSTEM</span>
        <h1>취약점 대응 통합 시스템</h1>
        <p>
          보안·AI오판·코인·개인정보·기업공격·운영비·내부자 리스크를
          실증데이터 기반으로 통합 대응합니다.
        </p>
      </section>

      <section className="grid">
        {riskSystems.map((item)=>(
          <article className="card" key={item.name}>
            <div className="top">
              <span>{item.priority}</span>
              <b>{item.status}</b>
            </div>

            <h2>{item.name}</h2>

            <dl>
              <dt>위험</dt>
              <dd>{item.danger}</dd>

              <dt>대응</dt>
              <dd>{item.response}</dd>
            </dl>
          </article>
        ))}
      </section>

      <section className="strategy">
        <span className="badge">MASTER STRATEGY</span>
        <h2>{strategy.title}</h2>
        <p>{strategy.philosophy}</p>

        <div className="steps">
          {strategy.strategy.map((step)=>(
            <div key={step}>{step}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
