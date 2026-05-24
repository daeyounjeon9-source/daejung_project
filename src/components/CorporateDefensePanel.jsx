
import { useMemo, useState } from "react";
import {
  addCustomThreat,
  getDefenseState,
  reopenThreat,
  resolveThreat,
  runDefenseScan,
} from "../lib/corporateDefenseAI";

export default function CorporateDefensePanel() {
  const [state, setState] = useState(() => getDefenseState());
  const [custom, setCustom] = useState("");

  const unresolved = useMemo(() => {
    return state.threats.filter((t) => !state.resolved.includes(t.id));
  }, [state]);

  return (
    <section className="corporate-defense-panel">
      <div className="defense-header">
        <div>
          <span className="badge danger-badge">Corporate Defense AI</span>
          <h2>기업성장 방해요소 · 공격대응 · 주식변동 예측 시스템</h2>
          <p>
            경쟁사 추격, 가격공세, 허위여론, 규제리스크, 서버장애, 상장 후 변동성,
            고객이탈 가능성을 AI가 선제 감지하고 대응전략을 관리자에게 제안합니다.
          </p>
        </div>

        <div className="defense-score-box">
          <span>기업방어 점수</span>
          <strong>{state.defenseScore}</strong>
          <small>미조치 위협 {unresolved.length}개</small>
        </div>
      </div>

      <div className="processor-actions">
        <button onClick={() => setState(runDefenseScan())}>
          기업방어 스캔 실행
        </button>
      </div>

      <div className="custom-check">
        <input
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="예: 특정 커뮤니티 허위이슈 확산 가능성"
        />
        <button
          onClick={() => {
            if (!custom.trim()) return;
            setState(addCustomThreat(custom));
            setCustom("");
          }}
        >
          위협 추가
        </button>
      </div>

      <div className="risk-grid">
        {state.threats.map((item) => {
          const resolved = state.resolved.includes(item.id);

          return (
            <article
              key={item.id}
              className={`risk-card ${item.level === "위험" ? "danger-card" : ""} ${resolved ? "resolved-card" : ""}`}
            >
              <div className="risk-top">
                <span>{item.category}</span>
                <b>{resolved ? "조치완료" : item.level}</b>
              </div>

              <h3>{item.threat}</h3>

              <dl>
                <dt>예측</dt>
                <dd>{item.prediction}</dd>

                <dt>대응방향</dt>
                <dd>{item.response}</dd>
              </dl>

              <div className="risk-bottom">
                <small>위험도 {item.score}</small>

                {resolved ? (
                  <button
                    className="ghost-btn"
                    onClick={() => setState(reopenThreat(item.id))}
                  >
                    재점검
                  </button>
                ) : (
                  <button onClick={() => setState(resolveThreat(item.id))}>
                    대응완료
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
