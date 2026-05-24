
const AUTO_STRATEGY_KEY = "DAEJUNG_NEXT_AUTO_STRATEGY_AI_V1";

const defaultState = {
  updatedAt: new Date().toISOString(),
  aiMode: "AUTO_EVOLUTION",
  strategyScore: 77,
  metrics: {
    visitors: 18420,
    conversionRate: 2.8,
    liveRetention: 61,
    repeatUsers: 38,
    couponUsage: 47,
    serverLoad: 54,
  },
  aiActions: [
    {
      id: "action-1",
      trigger: "20대 검색 증가",
      decision: "숏폼 LIVE 및 타임특가 상단 배치",
      expectedEffect: "재방문율 및 클릭률 상승 예상",
      confidence: 84,
    },
    {
      id: "action-2",
      trigger: "40~50대 건강식품 체류시간 증가",
      decision: "상담형 LIVE와 건강 추천 우선노출",
      expectedEffect: "구매전환율 상승 예상",
      confidence: 91,
    },
    {
      id: "action-3",
      trigger: "LIVE 시청 대비 결제 감소",
      decision: "즉시쿠폰·코인보상 자동 활성화",
      expectedEffect: "전환율 회복 예상",
      confidence: 87,
    }
  ],
  evolutionLog: [],
};

export function getAutoStrategyState() {
  const saved = localStorage.getItem(AUTO_STRATEGY_KEY);

  if (!saved) {
    localStorage.setItem(AUTO_STRATEGY_KEY, JSON.stringify(defaultState));
    return defaultState;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(AUTO_STRATEGY_KEY);
    return defaultState;
  }
}

function calcScore(metrics) {
  return Math.max(
    10,
    Math.min(
      99,
      Math.round(
        metrics.conversionRate * 10 +
        metrics.liveRetention * 0.4 +
        metrics.repeatUsers * 0.5 +
        metrics.couponUsage * 0.2
      )
    )
  );
}

export function runAutoEvolution() {
  const state = getAutoStrategyState();

  const metrics = {
    visitors: state.metrics.visitors + Math.floor(Math.random() * 1000),
    conversionRate: +(state.metrics.conversionRate + (Math.random() * 0.5 - 0.2)).toFixed(1),
    liveRetention: Math.min(99, state.metrics.liveRetention + Math.floor(Math.random() * 6 - 2)),
    repeatUsers: Math.min(99, state.metrics.repeatUsers + Math.floor(Math.random() * 5)),
    couponUsage: Math.min(99, state.metrics.couponUsage + Math.floor(Math.random() * 4)),
    serverLoad: Math.min(99, state.metrics.serverLoad + Math.floor(Math.random() * 8 - 3)),
  };

  const generatedActions = [];

  if (metrics.conversionRate < 3) {
    generatedActions.push({
      id: `auto-${Date.now()}-1`,
      trigger: "구매전환 하락 감지",
      decision: "AI 할인전략 및 추천 알고리즘 강화",
      expectedEffect: "전환율 회복 시도",
      confidence: 86,
    });
  }

  if (metrics.liveRetention > 65) {
    generatedActions.push({
      id: `auto-${Date.now()}-2`,
      trigger: "LIVE 체류시간 증가",
      decision: "관련 상품 자동 추천 확대",
      expectedEffect: "라이브 기반 구매 확대",
      confidence: 89,
    });
  }

  if (metrics.serverLoad > 70) {
    generatedActions.push({
      id: `auto-${Date.now()}-3`,
      trigger: "서버 부하 증가",
      decision: "트래픽 분산 및 캐시 최적화 실행",
      expectedEffect: "장애 예방",
      confidence: 94,
    });
  }

  const next = {
    ...state,
    updatedAt: new Date().toISOString(),
    metrics,
    strategyScore: calcScore(metrics),
    aiActions: [...generatedActions, ...state.aiActions].slice(0, 12),
    evolutionLog: [
      {
        type: "AI 전략 자동수정",
        message: "매출·이탈·LIVE·서버 상태 기반 전략 자동 재조정 완료",
        timestamp: new Date().toISOString(),
      },
      ...state.evolutionLog,
    ].slice(0, 30),
  };

  localStorage.setItem(AUTO_STRATEGY_KEY, JSON.stringify(next));
  return next;
}
