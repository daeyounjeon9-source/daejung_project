
import { useMemo, useState } from "react";
import {
  buildVIPReport,
  runGlobalAIScan,
  vipPrinciples
} from "../lib/globalAIIntelligenceEngine";

export default function GlobalAIIntelligenceVIPPanel(){
  const [scans,setScans] = useState(runGlobalAIScan());
  const [logs,setLogs] = useState([]);
  const report = useMemo(()=>buildVIPReport(scans),[scans]);

  const runScan = () => {
    const next = runGlobalAIScan();
    setScans(next);
    setLogs([
      {
        title:"GLOBAL AI INTELLIGENCE SCAN",
        message:"공개 AI기술·국제정세·투자흐름·경쟁정보·정책 리스크 재분석 완료",
        time:new Date().toLocaleTimeString()
      },
      ...logs
    ].slice(0,8));
  };

  return (
    <section className="vip-panel">
      <div className="header-row">
        <div>
          <span className="badge">GLOBAL AI INTELLIGENCE · VIP FUTURE VALUE</span>
          <h1>글로벌 AI 인텔리전스 + VIP 미래가치 리포트</h1>
          <p>
            전세계 공개 AI 기술 흐름, 국제정세, 규제, 투자시장, 소비자 감정,
            경쟁 플랫폼 정보를 수집·검증해 대정넥스트 AI 실증데이터로 접목하고,
            VIP에게는 투자 성향·관심 방향·주의사항을 참고정보로 제공합니다.
          </p>
        </div>

        <div className="score-box">
          <span>VIP 주목영역</span>
          <strong>{scans[0]?.vipAttention}</strong>
          <small>개인 선택 참고정보</small>
        </div>
      </div>

      <div className="notice-box">
        <b>중요 원칙</b>
        <p>
          비공개 AI 기억·개인정보·내부 시스템 감시는 하지 않습니다.
          공개·합법 정보만 분석하며, 투자 판단은 개인의 선택입니다.
        </p>
      </div>

      <div className="toolbar">
        <button onClick={runScan}>글로벌 AI 인텔리전스 스캔 실행</button>
      </div>

      <div className="vip-report">
        <span className="badge">VIP REPORT</span>
        <h2>{report.title}</h2>
        <dl>
          <dt>주목해야 할 방향</dt>
          <dd>{report.attention}</dd>

          <dt>주의해야 할 사항</dt>
          <dd>{report.warning}</dd>

          <dt>AI 종합 판단</dt>
          <dd>{report.message}</dd>
        </dl>
      </div>

      <div className="source-grid">
        {scans.map((item)=>(
          <article className="source-card" key={item.name}>
            <div className="top">
              <span>{item.type}</span>
              <b>{item.confidence}%</b>
            </div>

            <h3>{item.name}</h3>

            <dl>
              <dt>감지 신호</dt>
              <dd>{item.signal}</dd>

              <dt>대정넥스트 활용</dt>
              <dd>{item.value}</dd>

              <dt>위험요소</dt>
              <dd>{item.risk}</dd>

              <dt>실증데이터</dt>
              <dd>{item.evidenceCount.toLocaleString()}건</dd>

              <dt>미래 영향도</dt>
              <dd>{item.futureImpact}%</dd>

              <dt>VIP 관심도</dt>
              <dd>{item.vipAttention}%</dd>

              <dt>AI 적용 명령</dt>
              <dd>{item.aiAction}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="principle-panel">
        <span className="badge">VIP DISCLOSURE PRINCIPLES</span>
        <h2>VIP 제공 원칙</h2>
        <div className="principle-grid">
          {vipPrinciples.map((item)=>(
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <div className="next-panel">
        <span className="badge">PROGRAM CONNECTION</span>
        <h2>대정넥스트 프로그램 접목 방향</h2>
        <div className="next-grid">
          <div>글로벌 뉴스/API 연결</div>
          <div>AI 논문/특허 흐름 분석</div>
          <div>국제정세 리스크 점수</div>
          <div>VIP 미래가치 리포트</div>
          <div>투자 관심영역 알림</div>
          <div>위험/과열 테마 경고</div>
          <div>경쟁사 대응전략 자동수정</div>
          <div>대정넥스트 실증데이터 반영</div>
        </div>
      </div>

      <div className="log-panel">
        <span className="badge">INTELLIGENCE LOG</span>
        <h2>인텔리전스 스캔 기록</h2>
        {logs.length === 0 ? (
          <p>아직 스캔 기록이 없습니다.</p>
        ) : (
          logs.map((log,idx)=>(
            <div className="log-row" key={idx}>
              <b>{log.title}</b>
              <span>{log.message}</span>
              <em>{log.time}</em>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
