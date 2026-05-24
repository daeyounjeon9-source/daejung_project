
const LOG_KEY = "DAEJUNG_NEXT_SUCCESSION_VAULT_LOG_V1";

export const successionProtocol = {
  classification:"OMEGA BLACK",
  title:"대정넥스트 비상 상속 및 통지 프로토콜",
  owner:"전대연",
  purpose:"장기 미접속, 연락두절, 사망 또는 비상상황 발생 시 법률/회계 자문에게 통지하고 가족관계 확인 절차를 기록하기 위한 내부 보관 시스템",
  status:"보관 관리 중",
  legalNotice:"본 시스템은 내부 통지/보관용이며, 자동 법적 효력을 직접 발생시키지 않습니다. 실제 효력은 유언, 신탁, 공증, 법원 절차, 세무 절차, 회사 정관, 주주계약 등에 따릅니다."
};

export const emergencyConditions = [
  "1년 이상 장기 미접속",
  "장기 연락두절",
  "사망 확인 가능 상태",
  "법률 대리인 요청",
  "가족 요청 및 증빙 제출"
];

export const notificationTargets = [
  "지정 법률 자문",
  "지정 회계 자문",
  "승인된 상속 절차 관리자",
  "MASTER OWNER 보안 기록실"
];

export const verificationDocuments = [
  "가족관계증명서",
  "사망 관련 증빙",
  "신원확인 자료",
  "친자 관계 증빙",
  "법률/세무 검토 기록",
  "회사 정관/주주계약 검토 기록"
];

export const designatedReviewTargets = [
  {
    name:"전윤경",
    role:"지정 확인 대상",
    condition:"가족관계증명서상 친자 관계 확인 필요",
    action:"법률/회계 검토 후 승계 절차 검토"
  },
  {
    name:"전지운",
    role:"지정 확인 대상",
    condition:"가족관계증명서상 친자 관계 확인 필요",
    action:"법률/회계 검토 후 승계 절차 검토"
  }
];

export function addSuccessionLog(type, message){
  const logs = getSuccessionLogs();
  const next = [
    { type, message, timestamp:new Date().toISOString() },
    ...logs
  ].slice(0, 50);
  localStorage.setItem(LOG_KEY, JSON.stringify(next));
  return next;
}

export function getSuccessionLogs(){
  try{
    return JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
  }catch{
    return [];
  }
}

export function clearSuccessionLogs(){
  localStorage.removeItem(LOG_KEY);
  return [];
}

export function runEmergencyCheck(){
  return addSuccessionLog(
    "비상 절차 점검",
    "장기 미접속/연락두절/사망/법률요청/가족요청 조건을 점검하고 법률·회계 통지 준비 상태를 기록했습니다."
  );
}

export function runAdvisorNotificationDraft(){
  return addSuccessionLog(
    "자문 통지 준비",
    "지정 법률 자문 및 회계 자문에게 가족관계증명서·사망증빙·신원확인 자료 검토 요청 문구를 준비했습니다."
  );
}

export function runVaultSeal(){
  return addSuccessionLog(
    "OMEGA BLACK 봉인",
    "비상 상속/통지 문서를 최고기밀 보관 상태로 봉인하고 접근 로그 기록을 활성화했습니다."
  );
}
