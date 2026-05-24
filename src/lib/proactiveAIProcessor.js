const PROCESSOR_KEY = "DAEJUNG_NEXT_PROACTIVE_AI_PROCESSOR_V1";

const defaultSignals = [
  {
    id: "risk-data-gap-20s",
    type: "실증데이터 부족",
    level: "주의",
    area: "20대 고객군",
    detected: "검색/찜 데이터는 있으나 구매 전환 실증데이터가 부족합니다.",
    action: "20대 전용 타임특가, 리뷰형 LIVE, 쿠폰 A/B 테스트를 실행하세요.",
    priority: 78,
  },
  {
    id: "risk-senior-ui",
    type: "접근성 리스크",
    level: "위험",
    area: "60~70대 고객군",
    detected: "고령층은 구매 의향이 있어도 복잡한 결제·작은 글씨에서 이탈 가능성이 큽니다.",
    action: "큰 버튼, 음성안내, 상담원 연결, 가족 대리주문 기능을 우선 적용하세요.",
    priority: 88,
  },
  {
    id: "risk-live-low-conversion",
    type: "전환율 병목",
    level: "주의",
    area: "LIVE 커머스",
    detected: "라이브 시청시간은 길지만 결제 전환이 낮을 가능성이 있습니다.",
    action: "라이브 중 즉시쿠폰, 제한수량, 코인 보상, 상담형 구매버튼을 추가하세요.",
    priority: 82,
  },
  {
    id: "risk-coin-abuse",
    type: "코인 악용 가능성",
    level: "위험",
    area: "LIVON 코인",
    detected: "구매 없이 검색·출석·시청 보상만 반복 수집하는 패턴이 발생할 수 있습니다.",
    action: "보상 상한, 구매연계 보상, 봇 탐지, 동일기기 제한, 이상패턴 경고를 넣으세요.",
    priority: 91,
  },
  {
    id: "risk-privacy-consent",
    type: "법무/개인정보",
    level: "위험",
    area: "행태정보 추천",
    detected: "검색·조회·체류시간 기반 추천은 동의/고지/삭제 기능이 없으면 리스크가 큽니다.",
    action: "맞춤추천 동의, 쿠키 고지, 데이터 삭제, 보관기간, 목적 외 사용 차단을 명확히 하세요.",
    priority: 95,
  },
  {
    id: "risk-competitor-copy",
    type: "경쟁사 추격",
    level: "주의",
    area: "초거대기업 대응",
    detected: "단순 추천/라이브/쿠폰 기능은 대기업이 쉽게 모방할 수 있습니다.",
    action: "고객기억AI+코인경제+캐릭터쇼호스트+실증데이터 루프를 결합해 방어력을 높이세요.",
    priority: 84,
  },
  {
    id: "risk-search-no-buy",
    type: "구매전환 미흡",
    level: "주의",
    area: "검색 고객",
    detected: "검색은 많지만 구매하지 않는 고객군이 누적될 수 있습니다.",
    action: "재접속 메인 개인화, 가격알림, 관련 LIVE 추천, 첫구매 코인혜택을 자동 노출하세요.",
    priority: 80,
  },
];

const defaultProcessor = {
  updatedAt: new Date().toISOString(),
  mode: "선제예측",
  uncheckedItems: [],
  resolvedItems: [],
  signals: defaultSignals,
  auditLog: [],
  processorScore: 72,
};

export function getProactiveProcessor() {
  const saved = localStorage.getItem(PROCESSOR_KEY);
  if (!saved) {
    localStorage.setItem(PROCESSOR_KEY, JSON.stringify(defaultProcessor));
    return defaultProcessor;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(PROCESSOR_KEY);
    return getProactiveProcessor();
  }
}

export function saveProactiveProcessor(data) {
  const next = {
    ...data,
    updatedAt: new Date().toISOString(),
    processorScore: calculateProcessorScore(data.signals, data.resolvedItems),
  };
  localStorage.setItem(PROCESSOR_KEY, JSON.stringify(next));
  return next;
}

function calculateProcessorScore(signals, resolvedItems) {
  const unresolvedRisk = signals.reduce((sum, item) => {
    if (resolvedItems.includes(item.id)) return sum;
    const weight = item.level === "위험" ? 1.4 : item.level === "주의" ? 1.0 : 0.6;
    return sum + item.priority * weight;
  }, 0);

  const score = Math.max(12, Math.min(99, Math.round(100 - unresolvedRisk / 18 + resolvedItems.length * 4)));
  return score;
}

export function addUncheckedItem(text) {
  const data = getProactiveProcessor();
  const item = {
    id: `custom-${Date.now()}`,
    type: "사용자 추가 점검",
    level: "주의",
    area: "대정넥스트 운영",
    detected: text,
    action: "관리자가 실증데이터를 확보하고 기능/법무/운영 반영 여부를 검토해야 합니다.",
    priority: 75,
  };

  return saveProactiveProcessor({
    ...data,
    uncheckedItems: [item, ...data.uncheckedItems],
    signals: [item, ...data.signals],
    auditLog: [
      { label: "새 점검항목 추가", message: text, timestamp: new Date().toISOString() },
      ...data.auditLog,
    ].slice(0, 40),
  });
}

export function resolveSignal(id) {
  const data = getProactiveProcessor();
  const target = data.signals.find((item) => item.id === id);

  return saveProactiveProcessor({
    ...data,
    resolvedItems: Array.from(new Set([id, ...data.resolvedItems])),
    auditLog: [
      {
        label: "관리자 조치 완료",
        message: target ? `${target.area} · ${target.action}` : id,
        timestamp: new Date().toISOString(),
      },
      ...data.auditLog,
    ].slice(0, 40),
  });
}

export function reopenSignal(id) {
  const data = getProactiveProcessor();
  return saveProactiveProcessor({
    ...data,
    resolvedItems: data.resolvedItems.filter((item) => item !== id),
    auditLog: [
      { label: "재점검 전환", message: id, timestamp: new Date().toISOString() },
      ...data.auditLog,
    ].slice(0, 40),
  });
}

export function runProcessorScan() {
  const data = getProactiveProcessor();
  const now = new Date().toISOString();

  const dynamicSignals = [
    {
      id: `scan-market-${Date.now()}`,
      type: "시장 변화 감시",
      level: "주의",
      area: "외부 트렌드",
      detected: "건강식품, 초저가, 고령친화 UI, 숏폼 LIVE 수요는 계속 재검증해야 합니다.",
      action: "매주 검색어·구매전환·LIVE 체류시간·연령대별 쿠폰반응을 비교하세요.",
      priority: 74,
    },
    {
      id: `scan-admin-${Date.now() + 1}`,
      type: "관리자 의사결정 경고",
      level: "주의",
      area: "운영 판단",
      detected: "관리자가 AI 권고를 무시하면 같은 문제가 반복될 수 있습니다.",
      action: "권고 미반영 항목은 관리자 대시보드에 계속 상단 고정하세요.",
      priority: 77,
    },
  ];

  return saveProactiveProcessor({
    ...data,
    signals: [...dynamicSignals, ...data.signals].slice(0, 20),
    auditLog: [
      { label: "선제예측 스캔 실행", message: "미검증·리스크·시장변화 항목을 재점검했습니다.", timestamp: now },
      ...data.auditLog,
    ].slice(0, 40),
  });
}

export function resetProactiveProcessor() {
  localStorage.removeItem(PROCESSOR_KEY);
  return getProactiveProcessor();
}

export function getProcessorSummary(data = getProactiveProcessor()) {
  const unresolved = data.signals.filter((item) => !data.resolvedItems.includes(item.id));
  const danger = unresolved.filter((item) => item.level === "위험").length;
  const caution = unresolved.filter((item) => item.level === "주의").length;
  const top = [...unresolved].sort((a, b) => b.priority - a.priority)[0];

  return {
    unresolvedCount: unresolved.length,
    danger,
    caution,
    top,
    message:
      danger > 0
        ? "위험 항목부터 즉시 반영해야 합니다."
        : caution > 0
        ? "주의 항목을 실증데이터로 검증해야 합니다."
        : "현재 주요 선제예측 항목은 조치 완료 상태입니다.",
  };
}
