
import { useState } from "react";
import {
  getAutoStrategyState,
  runAutoEvolution,
} from "../lib/autoStrategyAI";

export default function AutoStrategyPanel() {
  const [state, setState] = useState(() => getAutoStrategyState());

  return (
    <section className="auto-strategy-panel">
      <div className="auto-header">
        <div>
          <span className="badge">Auto Strategy AI</span>
          <h2>AI 자동 전략 수정 엔진</h2>
          <p>
            대정넥스트가 검색, 구매전환, LIVE 체류시간, 재방문율,
            서버부하를 스스로 분석하고 메인화면·추천·쿠폰·LIVE 전략을 자동 수정합니다.
          </p>
        </div>

        <div className="score-box">
          <span>AI 진화 점수</span>
          <strong>{state.strategyScore}</strong>
          <small>실시간 자동 전략 적용중</small>
        </div>
      </div>

      <div className="metrics-grid">
        <article>
          <b>방문자</b>
          <strong>{state.metrics.visitors.toLocaleString()}</strong>
        </article>

        <article>
          <b>구매전환율</b>
          <strong>{state.metrics.conversionRate}%</strong>
        </article>

        <article>
          <b>LIVE 유지율</b>
          <strong>{state.metrics.liveRetention}%</strong>
        </article>

        <article>
          <b>재방문율</b>
          <strong>{state.metrics.repeatUsers}%</strong>
        </article>

        <article>
          <b>쿠폰 사용률</b>
          <strong>{state.metrics.couponUsage}%</strong>
        </article>

        <article>
          <b>서버부하</b>
          <strong>{state.metrics.serverLoad}%</strong>
        </article>
      </div>

      <div className="processor-actions">
        <button onClick={() => setState(runAutoEvolution())}>
          AI 자동 전략 재학습 실행
        </button>
      </div>

      <div className="risk-grid">
        {state.aiActions.map((item) => (
          <article className="risk-card" key={item.id}>
            <div className="risk-top">
              <span>AI 자동판단</span>
              <b>{item.confidence}%</b>
            </div>

            <h3>{item.trigger}</h3>

            <dl>
              <dt>AI 결정</dt>
              <dd>{item.decision}</dd>

              <dt>예상효과</dt>
              <dd>{item.expectedEffect}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="audit-log">
        <span className="badge">Evolution Log</span>
        <h3>AI 자동 전략 수정 기록</h3>

        {state.evolutionLog.length === 0 ? (
          <p className="empty">아직 자동수정 기록이 없습니다.</p>
        ) : (
          state.evolutionLog.map((log, idx) => (
            <div key={idx}>
              <b>{log.type}</b>
              <span>{log.message}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
