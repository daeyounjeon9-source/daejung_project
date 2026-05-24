
const DEFENSE_KEY = "DAEJUNG_NEXT_CORPORATE_DEFENSE_AI_V1";

const defaultThreats = [
  {
    id: "market-price-war",
    category: "가격경쟁",
    level: "주의",
    threat: "대기업·중국계 플랫폼의 초저가 공세 가능성",
    prediction: "가격만으로 경쟁 시 수익성 붕괴 위험",
    response: "AI추천·LIVE·코인경제·상담형 판매·고객기억 시스템으로 차별화",
    score: 78,
  },
  {
    id: "fake-review-attack",
    category: "여론공격",
    level: "위험",
    threat: "허위 리뷰·커뮤니티 악성 이슈 확산 가능성",
    prediction: "신뢰도 하락 시 구매전환 급감 위험",
    response: "AI 이상리뷰 탐지·실구매 인증·법무 대응 로그 구축",
    score: 91,
  },
  {
    id: "stock-volatility",
    category: "주식변동",
    level: "주의",
    threat: "상장 후 외부 뉴스·세력 움직임에 따른 급등락 가능성",
    prediction: "투자심리 기반 변동성 확대 가능",
    response: "실적·실사용자·실증데이터 중심 IR 체계 강화",
    score: 83,
  },
  {
    id: "server-overload",
    category: "인프라",
    level: "위험",
    threat: "라이브 폭주·동시접속 증가 시 서버 병목 가능성",
    prediction: "장애 발생 시 신뢰도·매출 동시 하락",
    response: "멀티서버·CDN·트래픽 분산·실시간 모니터링 적용",
    score: 94,
  },
  {
    id: "coin-regulation",
    category: "규제리스크",
    level: "위험",
    threat: "코인/포인트 정책 관련 규제 변화 가능성",
    prediction: "정책 미대응 시 서비스 제한 가능",
    response: "법무·세무·회계 분리 구조와 보상형 토큰 정책 강화",
    score: 96,
  },
  {
    id: "competitor-copy",
    category: "경쟁사모방",
    level: "주의",
    threat: "대기업이 유사 추천/LIVE 기능 모방 가능",
    prediction: "차별성 약화 가능",
    response: "실증데이터·AI진화·고객기억·캐릭터쇼호스트 통합화",
    score: 80,
  }
];

const defaultState = {
  updatedAt: new Date().toISOString(),
  defenseScore: 74,
  threats: defaultThreats,
  resolved: [],
  logs: [],
};

export function getDefenseState() {
  const saved = localStorage.getItem(DEFENSE_KEY);
  if (!saved) {
    localStorage.setItem(DEFENSE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(DEFENSE_KEY);
    return defaultState;
  }
}

function calcScore(threats, resolved) {
  let risk = 0;
  threats.forEach((t) => {
    if (!resolved.includes(t.id)) {
      risk += t.score;
    }
  });
  return Math.max(10, Math.min(99, Math.round(100 - risk / 10 + resolved.length * 5)));
}

export function resolveThreat(id) {
  const state = getDefenseState();
  const nextResolved = [...new Set([id, ...state.resolved])];

  const next = {
    ...state,
    resolved: nextResolved,
    defenseScore: calcScore(state.threats, nextResolved),
    logs: [
      {
        type: "조치완료",
        message: id,
        timestamp: new Date().toISOString(),
      },
      ...state.logs,
    ].slice(0, 30),
  };

  localStorage.setItem(DEFENSE_KEY, JSON.stringify(next));
  return next;
}

export function reopenThreat(id) {
  const state = getDefenseState();

  const nextResolved = state.resolved.filter((r) => r !== id);

  const next = {
    ...state,
    resolved: nextResolved,
    defenseScore: calcScore(state.threats, nextResolved),
  };

  localStorage.setItem(DEFENSE_KEY, JSON.stringify(next));
  return next;
}

export function runDefenseScan() {
  const state = getDefenseState();

  const dynamic = {
    id: `dynamic-${Date.now()}`,
    category: "시장변화",
    level: "주의",
    threat: "경기침체·소비심리 위축·초저가 선호 변화 가능성",
    prediction: "가격민감도 상승과 중저가 경쟁 심화 가능",
    response: "AI 가격전략·연령별 쿠폰·실시간 추천 우선순위 재조정",
    score: 76,
  };

  const next = {
    ...state,
    threats: [dynamic, ...state.threats].slice(0, 12),
    defenseScore: calcScore([dynamic, ...state.threats], state.resolved),
    logs: [
      {
        type: "방어스캔",
        message: "기업 방해요소·시장공격·변동성 재분석 완료",
        timestamp: new Date().toISOString(),
      },
      ...state.logs,
    ].slice(0, 30),
  };

  localStorage.setItem(DEFENSE_KEY, JSON.stringify(next));
  return next;
}

export function addCustomThreat(text) {
  const state = getDefenseState();

  const custom = {
    id: `custom-${Date.now()}`,
    category: "사용자 지정",
    level: "주의",
    threat: text,
    prediction: "실증데이터 기반 재검증 필요",
    response: "AI 리스크 추적 및 관리자 검토 필요",
    score: 72,
  };

  const next = {
    ...state,
    threats: [custom, ...state.threats],
    defenseScore: calcScore([custom, ...state.threats], state.resolved),
  };

  localStorage.setItem(DEFENSE_KEY, JSON.stringify(next));
  return next;
}
