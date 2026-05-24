import { useMemo, useState } from "react";
import {
  addUncheckedItem,
  getProactiveProcessor,
  getProcessorSummary,
  reopenSignal,
  resetProactiveProcessor,
  resolveSignal,
  runProcessorScan,
} from "../lib/proactiveAIProcessor";

export default function ProactiveAIProcessorPanel() {
  const [processor, setProcessor] = useState(() => getProactiveProcessor());
  const [customText, setCustomText] = useState("");
  const summary = useMemo(() => getProcessorSummary(processor), [processor]);

  const submitCustom = () => {
    if (!customText.trim()) return;
    setProcessor(addUncheckedItem(customText.trim()));
    setCustomText("");
  };

  return (
    <section className="proactive-panel">
      <div className="proactive-header">
        <div>
          <span className="badge danger-badge">Proactive AI Processor</span>
          <h2>예측 못한 내용·미검증 리스크 자동체크 프로세서</h2>
          <p>
            대정넥스트 운영 중 놓치기 쉬운 법무, 개인정보, 코인악용, 연령별 이탈,
            구매전환 병목, 경쟁사 추격, 실증데이터 부족을 미리 감지하고 관리자 조치 방향을 제안합니다.
          </p>
        </div>

        <div className="processor-score">
          <span>선제대응 점수</span>
          <strong>{processor.processorScore}</strong>
          <small>{summary.message}</small>
        </div>
      </div>

      <div className="processor-actions">
        <button onClick={() => setProcessor(runProcessorScan())}>선제예측 스캔 실행</button>
        <button className="ghost-btn" onClick={() => setProcessor(resetProactiveProcessor())}>
          프로세서 초기화
        </button>
      </div>

      <div className="processor-summary">
        <article>
          <b>미조치 항목</b>
          <strong>{summary.unresolvedCount}</strong>
        </article>
        <article>
          <b>위험</b>
          <strong className="danger-text">{summary.danger}</strong>
        </article>
        <article>
          <b>주의</b>
          <strong>{summary.caution}</strong>
        </article>
        <article>
          <b>최우선 조치</b>
          <p>{summary.top ? `${summary.top.area} · ${summary.top.action}` : "없음"}</p>
        </article>
      </div>

      <div className="custom-check">
        <input
          value={customText}
          onChange={(event) => setCustomText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") submitCustom();
          }}
          placeholder="관리자가 걱정하는 미검증 내용 입력: 예) 특정 상품 반품률 증가 가능성"
        />
        <button onClick={submitCustom}>점검항목 추가</button>
      </div>

      <div className="risk-grid">
        {processor.signals.map((signal) => {
          const resolved = processor.resolvedItems.includes(signal.id);
          return (
            <article className={`risk-card ${signal.level === "위험" ? "danger-card" : ""} ${resolved ? "resolved-card" : ""}`} key={signal.id}>
              <div className="risk-top">
                <span>{signal.type}</span>
                <b>{resolved ? "조치완료" : signal.level}</b>
              </div>
              <h3>{signal.area}</h3>
              <dl>
                <dt>감지내용</dt>
                <dd>{signal.detected}</dd>
                <dt>반영방향</dt>
                <dd>{signal.action}</dd>
              </dl>
              <div className="risk-bottom">
                <small>우선순위 {signal.priority}</small>
                {resolved ? (
                  <button className="ghost-btn" onClick={() => setProcessor(reopenSignal(signal.id))}>
                    재점검
                  </button>
                ) : (
                  <button onClick={() => setProcessor(resolveSignal(signal.id))}>
                    조치완료
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="audit-log">
        <span className="badge">Processor Log</span>
        <h3>관리자 조치 기록</h3>
        {processor.auditLog.length === 0 ? (
          <p className="empty">아직 기록이 없습니다.</p>
        ) : (
          processor.auditLog.slice(0, 8).map((log, index) => (
            <div key={`${log.timestamp}-${index}`}>
              <b>{log.label}</b>
              <span>{log.message}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
