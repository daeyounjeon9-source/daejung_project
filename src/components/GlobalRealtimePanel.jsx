
import { useMemo, useState } from "react";
import { countries, simulateRealtimeGlobalScan } from "../lib/globalRealtimeEngine";

export default function GlobalRealtimePanel(){
  const [scan,setScan] = useState(simulateRealtimeGlobalScan());
  const [selected,setSelected] = useState("대한민국");

  const current = useMemo(()=>scan.find(s=>s.country===selected),[scan,selected]);

  return (
    <section className="global-panel">
      <div className="global-header">
        <div>
          <span className="badge">GLOBAL REALTIME INTELLIGENCE</span>
          <h1>글로벌 실시간 전략 AI 시스템</h1>
          <p>
            국가별 트렌드, 환율, LIVE 반응, 글로벌 경쟁 흐름을 분석해
            대정넥스트의 추천·광고·LIVE·상품전략을 자동 조정합니다.
          </p>
        </div>

        <div className="score-box">
          <span>글로벌 성장성</span>
          <strong>{current?.growth}</strong>
          <small>{current?.country}</small>
        </div>
      </div>

      <div className="toolbar">
        <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
          {scan.map((item)=>(
            <option key={item.country}>{item.country}</option>
          ))}
        </select>

        <button onClick={()=>setScan(simulateRealtimeGlobalScan())}>
          글로벌 실시간 스캔
        </button>
      </div>

      <div className="grid">
        {scan.map((item)=>(
          <article className={`card ${item.risk==="높음" ? "danger-card":""}`} key={item.country}>
            <div className="top">
              <span>{item.country}</span>
              <b>{item.aiConfidence}%</b>
            </div>

            <h3>{item.trend}</h3>

            <dl>
              <dt>언어</dt>
              <dd>{item.lang}</dd>

              <dt>통화</dt>
              <dd>{item.currency}</dd>

              <dt>환율</dt>
              <dd>{item.rate}</dd>

              <dt>전략</dt>
              <dd>{item.strategy}</dd>

              <dt>실시간 LIVE 접속</dt>
              <dd>{item.liveUsers.toLocaleString()}명</dd>

              <dt>예상 전환율</dt>
              <dd>{item.conversion}%</dd>

              <dt>위험도</dt>
              <dd>{item.risk}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="bottom-panel">
        <span className="badge">GLOBAL AI FUTURE</span>
        <h2>다음 글로벌 확장 예정</h2>

        <div className="future-grid">
          <div>AI 자동 통역 LIVE</div>
          <div>국가별 AI 쇼호스트 외형</div>
          <div>실시간 환율 반영 가격</div>
          <div>글로벌 물류 분산</div>
          <div>국가별 광고 전략</div>
          <div>세계 소비 흐름 분석</div>
          <div>해외 서버 자동 분산</div>
          <div>글로벌 위험국 감지</div>
        </div>
      </div>
    </section>
  );
}
