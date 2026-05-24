import { useMemo, useState } from "react";
import {
  addEvidenceSample,
  getAgeForecastData,
  getStrategicSummary,
  resetAgeForecastData,
} from "../lib/ageDemandForecastEngine";

const actions = [
  ["search", "검색"],
  ["productView", "상품조회"],
  ["liveWatch", "라이브시청"],
  ["cart", "장바구니"],
  ["coupon", "쿠폰클릭"],
  ["consult", "상담연결"],
  ["purchase", "구매"],
];

export default function AgeDemandForecastPanel() {
  const [data, setData] = useState(() => getAgeForecastData());
  const summary = useMemo(() => getStrategicSummary(data), [data]);
  const [selectedAge, setSelectedAge] = useState("40대");

  return (
    <section className="age-forecast-panel">
      <div className="age-header">
        <div>
          <span className="badge">Age Demand Forecast</span>
          <h2>연령대별 수요예측 · 성향분석 · 접속유도 전략</h2>
          <p>
            10대부터 70대까지 고객군을 나누고, 검색·조회·라이브·상담·구매 반응을 실증데이터로 누적해
            대정넥스트의 추천 방향을 자동 보정합니다.
          </p>
        </div>
        <button className="reset-btn" onClick={() => setData(resetAgeForecastData())}>
          연령 예측 초기화
        </button>
      </div>

      <div className="strategy-cards">
        <article>
          <b>우선 공략 연령</b>
          <strong>{summary.topAges}</strong>
          <p>{summary.recommendation}</p>
        </article>
        <article>
          <b>실증데이터 확보 방식</b>
          <strong>{data.evidenceCount}건 누적</strong>
          <p>{summary.evidencePlan}</p>
        </article>
        <article>
          <b>현재 최고 수요</b>
          <strong>{summary.highestDemand.age} · {summary.highestDemand.demand}점</strong>
          <p>{summary.highestDemand.growthDirection}</p>
        </article>
      </div>

      <div className="age-grid">
        {data.segments.map((item) => (
          <article className="age-card" key={item.age}>
            <div className="age-card-top">
              <h3>{item.age}</h3>
              <strong>{item.demand}</strong>
            </div>
            <div className="age-bar">
              <i style={{ width: `${item.demand}%` }} />
            </div>
            <dl>
              <dt>성향</dt>
              <dd>{item.tendency}</dd>
              <dt>접속유도</dt>
              <dd>{item.accessTrigger}</dd>
              <dt>실수요 신호</dt>
              <dd>{item.realDemandSignal}</dd>
              <dt>발전방향</dt>
              <dd>{item.growthDirection}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="evidence-lab">
        <div>
          <span className="badge">Evidence Data Lab</span>
          <h3>실증데이터 반영 테스트</h3>
          <p>
            실제 운영에서는 이 버튼들이 고객 행동 로그로 자동 대체됩니다.
            지금은 테스트용으로 연령대별 반응을 누적해 예측 점수가 변하는 구조입니다.
          </p>
        </div>

        <div className="evidence-controls">
          <select value={selectedAge} onChange={(event) => setSelectedAge(event.target.value)}>
            {data.segments.map((item) => (
              <option key={item.age}>{item.age}</option>
            ))}
          </select>

          <div className="action-buttons">
            {actions.map(([key, label]) => (
              <button key={key} onClick={() => setData(addEvidenceSample(selectedAge, key))}>
                {label} 반영
              </button>
            ))}
          </div>
        </div>

        <div className="evidence-list">
          {data.fieldData.length === 0 ? (
            <p className="empty">아직 누적된 실증데이터가 없습니다.</p>
          ) : (
            data.fieldData.slice(0, 8).map((item, index) => (
              <div key={`${item.timestamp}-${index}`}>
                <span>{item.age}</span>
                <b>{item.actionLabel}</b>
                <em>+{item.score}</em>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
