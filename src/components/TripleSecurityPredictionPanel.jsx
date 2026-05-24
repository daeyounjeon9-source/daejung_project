
import { useMemo, useState } from "react";
import {
  buildSecretPredictionSummary,
  runTripleSecurityScan
} from "../lib/tripleSecurityPredictionCore";

export default function TripleSecurityPredictionPanel(){
  const [scan,setScan] = useState(runTripleSecurityScan());
  const [logs,setLogs] = useState([]);
  const summary = useMemo(()=>buildSecretPredictionSummary(scan),[scan]);

  const rescan = () => {
    const next = runTripleSecurityScan();
    setScan(next);
    setLogs([
      {
        title:"TRIPLE SECURITY + PREDICTION SCAN",
        message:"3중 보안상태 및 투자/정책/국제정세/AI기술 흐름 예측 재분석 완료",
        time:new Date().toLocaleTimeString()
      },
      ...logs
    ].slice(0,8));
  };

  return (
    <section className="secret-panel">
      <div className="header-row">
        <div>
          <span className="badge danger-badge">OMEGA BLACK · TRIPLE SECURITY CORE</span>
          <h1>3중 보안 + 비밀 예측 습득 알고리즘</h1>
          <p>
            최고기밀 전략정보는 1차 소유자 인증, 2차 전략정보 분리 저장,
            3차 이상접근 탐지로 보호하고, 별도 인텔리전스 파이프라인이
            기업투자·국가정책·국제정세·AI기술 흐름을 치밀하게 분석해
            대정넥스트 알고리즘에 반영합니다.
          </p>
        </div>

        <div className="score-box">
          <span>보안 무결성</span>
          <strong>{summary.securityScore}</strong>
          <small>{summary.ownerCommand}</small>
        </div>
      </div>

      <div className="owner-lock">
        <b>단독 열람 원칙</b>
        <p>
          이 정보는 MASTER OWNER 전대연 단독 승인 영역입니다.
          공개용 서비스, 일반 관리자, 외주, 파트너, 테스트 계정과 분리됩니다.
        </p>
      </div>

      <div className="toolbar">
        <button onClick={rescan}>3중 보안/예측 스캔 실행</button>
      </div>

      <div className="summary-panel">
        <span className="badge">SECRET PREDICTION SUMMARY</span>
        <h2>비밀 예측 알고리즘 종합 판단</h2>
        <dl>
          <dt>최우선 감지 신호</dt>
          <dd>{summary.topSignal}</dd>

          <dt>반영 원칙</dt>
          <dd>{summary.ownerCommand}</dd>

          <dt>예측 방향</dt>
          <dd>{summary.prediction}</dd>
        </dl>
      </div>

      <h2>3중 보안 체계</h2>
      <div className="security-grid">
        {scan.security.map((item)=>(
          <article className="security-card" key={item.layer}>
            <div className="top">
              <span>{item.layer}</span>
              <b>{item.integrity}</b>
            </div>
            <h3>{item.name}</h3>
            <dl>
              <dt>목적</dt>
              <dd>{item.purpose}</dd>
              <dt>방법</dt>
              <dd>{item.method}</dd>
              <dt>상태</dt>
              <dd>{item.status} · {item.alert}</dd>
            </dl>
          </article>
        ))}
      </div>

      <h2>별도 습득/예측 인텔리전스 파이프라인</h2>
      <div className="intel-grid">
        {scan.intelligence.map((item)=>(
          <article className="intel-card" key={item.name}>
            <div className="top">
              <span>{item.secrecy}</span>
              <b>{item.confidence}%</b>
            </div>
            <h3>{item.name}</h3>
            <dl>
              <dt>수집 대상</dt>
              <dd>{item.source}</dd>
              <dt>분석 방식</dt>
              <dd>{item.analysis}</dd>
              <dt>예측 활용</dt>
              <dd>{item.prediction}</dd>
              <dt>실증데이터</dt>
              <dd>{item.evidence.toLocaleString()}건</dd>
              <dt>미래 영향도</dt>
              <dd>{item.futureImpact}%</dd>
              <dt>AI 반영 명령</dt>
              <dd>{item.command}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="policy-panel">
        <span className="badge">CORE OPERATING RULE</span>
        <h2>기본 운영 원칙</h2>
        <div className="policy-grid">
          <div>공개 정보만 합법 수집</div>
          <div>비공개 AI 기억/개인정보 감시 금지</div>
          <div>전략정보는 MASTER OWNER 승인 후 반영</div>
          <div>VIP 정보는 참고용이며 투자판단은 개인 선택</div>
          <div>위험/과열/허위 정보는 경고 표시</div>
          <div>법무·세무·정책 리스크 우선 검증</div>
          <div>감사로그와 접근기록 영구 보관</div>
          <div>핵심 알고리즘 외부학습/공유 금지</div>
        </div>
      </div>

      <div className="log-panel">
        <span className="badge">SECURITY LOG</span>
        <h2>보안/예측 스캔 기록</h2>
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
