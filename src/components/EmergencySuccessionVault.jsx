
import { useState } from "react";
import {
  addSuccessionLog,
  clearSuccessionLogs,
  designatedReviewTargets,
  emergencyConditions,
  getSuccessionLogs,
  notificationTargets,
  runAdvisorNotificationDraft,
  runEmergencyCheck,
  runVaultSeal,
  successionProtocol,
  verificationDocuments
} from "../lib/successionVaultEngine";

export default function EmergencySuccessionVault(){
  const [logs,setLogs] = useState(()=>getSuccessionLogs());

  const exec = (fn) => {
    setLogs(fn());
  };

  return (
    <main className="vault-panel">
      <section className="hero">
        <div>
          <span className="badge danger-badge">{successionProtocol.classification}</span>
          <h1>{successionProtocol.title}</h1>
          <p>{successionProtocol.purpose}</p>
          <div className="notice">
            <b>법적 고지</b>
            <span>{successionProtocol.legalNotice}</span>
          </div>
        </div>

        <div className="seal-box">
          <span>VAULT STATUS</span>
          <strong>SEALED</strong>
          <small>{successionProtocol.status}</small>
        </div>
      </section>

      <section className="action-row">
        <button onClick={()=>exec(runEmergencyCheck)}>비상 조건 점검 실행</button>
        <button onClick={()=>exec(runAdvisorNotificationDraft)}>법률/회계 통지 준비</button>
        <button onClick={()=>exec(runVaultSeal)}>OMEGA BLACK 봉인</button>
        <button className="ghost-btn" onClick={()=>setLogs(clearSuccessionLogs())}>로그 초기화</button>
      </section>

      <section className="grid">
        <article className="card">
          <span className="badge">EMERGENCY CONDITIONS</span>
          <h2>비상 전환 조건</h2>
          {emergencyConditions.map((item)=>(
            <div className="line" key={item}>{item}</div>
          ))}
        </article>

        <article className="card">
          <span className="badge">NOTIFICATION</span>
          <h2>자동 통지 대상</h2>
          {notificationTargets.map((item)=>(
            <div className="line" key={item}>{item}</div>
          ))}
        </article>

        <article className="card">
          <span className="badge">DOCUMENT CHECK</span>
          <h2>확인 문서</h2>
          {verificationDocuments.map((item)=>(
            <div className="line" key={item}>{item}</div>
          ))}
        </article>
      </section>

      <section className="targets">
        <span className="badge">DESIGNATED REVIEW TARGETS</span>
        <h2>지정 확인 대상</h2>
        <div className="target-grid">
          {designatedReviewTargets.map((item)=>(
            <article key={item.name}>
              <b>{item.name}</b>
              <p>{item.role}</p>
              <small>{item.condition}</small>
              <em>{item.action}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="protocol">
        <span className="badge">TEXT ARCHIVE</span>
        <h2>대정넥스트 보관 문구</h2>
        <pre>{`본 문서는 대정넥스트 내부 보관·통지용 최고기밀 문서입니다.

1년 이상 장기 미접속, 장기 연락두절, 사망 확인 가능 상태, 법률 대리인 요청, 가족 요청 및 증빙 제출 중 하나 이상이 발생할 경우 비상 절차 검토 상태로 전환합니다.

지정 법률 자문 및 회계 자문은 가족관계증명서, 사망 관련 증빙, 신원확인 자료, 친자 관계 증빙 등을 검토합니다.

확인 대상은 전윤경, 전지운이며 가족관계증명서상 친자 관계 확인 후 내부 지분 기록, LIVON 코인 관련 기록, 디지털 자산 관리 절차, 상속 및 승계 검토 절차를 진행합니다.

본 문서는 자동 법적 효력을 직접 발생시키는 문서가 아니며 실제 효력은 법률 검토, 유언장, 신탁, 공증, 법원 절차, 세무 절차, 회사 정관, 주주계약 등에 따라 처리합니다.

주민등록번호 원문 저장은 금지하며 서버 해시 기반 인증, 다중 인증, 감사로그, 접근권한 분리 원칙을 적용합니다.`}</pre>
      </section>

      <section className="log-panel">
        <div className="log-head">
          <div>
            <span className="badge">SUCCESSION VAULT LOG</span>
            <h2>보관 관리 기록</h2>
          </div>
          <button className="ghost-btn" onClick={()=>{
            setLogs(addSuccessionLog("수동 기록", "관리자가 보관 문서 상태를 확인했습니다."));
          }}>수동 확인 기록</button>
        </div>

        {logs.length === 0 ? (
          <p>아직 기록이 없습니다.</p>
        ) : (
          logs.map((log,idx)=>(
            <div className="log-row" key={idx}>
              <b>{log.type}</b>
              <span>{log.message}</span>
              <em>{new Date(log.timestamp).toLocaleTimeString()}</em>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
