const AGE_STORAGE_KEY = "DAEJUNG_NEXT_AGE_DEMAND_FORECAST_V1";

export const ageSegments = [
  {
    age: "10대",
    key: "teen",
    demand: 58,
    tendency: "짧은 영상, 재미, 캐릭터, 즉시 보상, 친구 공유 반응이 강함",
    accessTrigger: "숏폼 LIVE, 미션형 코인, 친구초대 보상, 캐릭터 안내",
    realDemandSignal: "검색 반복, 짧은 체류 후 재방문, 코인 미션 참여",
    growthDirection: "엔터테인먼트형 쇼핑·게임형 보상·AI 캐릭터 접객 강화",
  },
  {
    age: "20대",
    key: "twenties",
    demand: 72,
    tendency: "가격, 트렌드, 리뷰, 빠른 배송, 모바일 경험에 민감",
    accessTrigger: "타임특가, 리뷰 기반 추천, 인플루언서 LIVE, 앱 푸시",
    realDemandSignal: "가격비교 검색, 찜, 장바구니, 쿠폰 클릭",
    growthDirection: "모바일 최적화·실시간 특가·리뷰 신뢰도·SNS 확산 강화",
  },
  {
    age: "30대",
    key: "thirties",
    demand: 81,
    tendency: "가성비, 가족소비, 생활필수품, 정기구매 가능성이 높음",
    accessTrigger: "묶음배송, 정기구독, 가족형 쿠폰, 생활카테고리 추천",
    realDemandSignal: "반복구매 품목 검색, 장바구니 보류, 배송비 민감 반응",
    growthDirection: "정기구매·생활장보기·AI 재구매 알림·가족계정 혜택 강화",
  },
  {
    age: "40대",
    key: "forties",
    demand: 86,
    tendency: "품질, 신뢰, 건강, 자녀/부모 소비, 상세 설명을 중요시함",
    accessTrigger: "전문가 설명 LIVE, 품질보증, 건강식품 추천, 상담형 AI",
    realDemandSignal: "상세페이지 장기 체류, 비교 조회, 상담 클릭",
    growthDirection: "신뢰형 홈쇼핑·전문가 LIVE·상담형 AI 쇼호스트 강화",
  },
  {
    age: "50대",
    key: "fifties",
    demand: 89,
    tendency: "홈쇼핑 친화도, 건강·식품·생활가전 관심, 상담 신뢰도가 높음",
    accessTrigger: "큰 글씨 UI, 전화/상담 연결, 건강 LIVE, 사은품 혜택",
    realDemandSignal: "방송 시청시간, 상담 버튼, 반복 검색, 전화주문 전환",
    growthDirection: "TV홈쇼핑 감성+모바일 간편결제+상담형 구매전환 강화",
  },
  {
    age: "60대",
    key: "sixties",
    demand: 76,
    tendency: "사용 편의성, 신뢰, 전화상담, 건강/식품/생활필수품 수요가 큼",
    accessTrigger: "간단 화면, 음성안내, 큰 버튼, 상담원 연결, 재구매 알림",
    realDemandSignal: "긴 시청시간, 같은 상품 재검색, 상담 연결 시도",
    growthDirection: "고령친화 UI·음성 안내·전화상담 연동·안심결제 강화",
  },
  {
    age: "70대",
    key: "seventies",
    demand: 63,
    tendency: "복잡한 절차를 싫어하고 가족 추천, 전화상담, 신뢰표시가 중요",
    accessTrigger: "초간단 구매, 가족 대리주문, 음성 안내, 상담 우선",
    realDemandSignal: "상품 설명 반복 조회, 상담 버튼, 가족공유 클릭",
    growthDirection: "보호자 연동·상담중심 구매·초간단 UI·안심 인증 강화",
  },
];

export function getAgeForecastData() {
  const saved = localStorage.getItem(AGE_STORAGE_KEY);
  if (!saved) {
    const seed = {
      updatedAt: new Date().toISOString(),
      evidenceCount: 0,
      segments: ageSegments,
      fieldData: [],
    };
    localStorage.setItem(AGE_STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(AGE_STORAGE_KEY);
    return getAgeForecastData();
  }
}

export function saveAgeForecastData(data) {
  const next = { ...data, updatedAt: new Date().toISOString() };
  localStorage.setItem(AGE_STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function addEvidenceSample(age, actionType) {
  const data = getAgeForecastData();
  const segment = data.segments.find((item) => item.age === age);
  if (!segment) return data;

  const scoreMap = {
    search: 2,
    productView: 4,
    liveWatch: 6,
    cart: 9,
    coupon: 7,
    purchase: 18,
    consult: 10,
  };

  const labelMap = {
    search: "검색",
    productView: "상품조회",
    liveWatch: "라이브시청",
    cart: "장바구니",
    coupon: "쿠폰클릭",
    purchase: "구매",
    consult: "상담연결",
  };

  const addScore = scoreMap[actionType] || 1;
  const nextSegments = data.segments.map((item) => {
    if (item.age !== age) return item;
    return {
      ...item,
      demand: Math.min(100, item.demand + addScore),
      realDemandSignal: `${item.realDemandSignal} · 최근 ${labelMap[actionType] || actionType} 반응 추가`,
    };
  });

  const sample = {
    age,
    actionType,
    actionLabel: labelMap[actionType] || actionType,
    score: addScore,
    timestamp: new Date().toISOString(),
  };

  return saveAgeForecastData({
    ...data,
    evidenceCount: data.evidenceCount + 1,
    segments: nextSegments,
    fieldData: [sample, ...data.fieldData].slice(0, 50),
  });
}

export function getStrategicSummary(data = getAgeForecastData()) {
  const sorted = [...data.segments].sort((a, b) => b.demand - a.demand);
  const top = sorted.slice(0, 3);
  const weak = sorted.slice(-2);

  return {
    topAges: top.map((item) => item.age).join(", "),
    highestDemand: sorted[0],
    weakAges: weak.map((item) => item.age).join(", "),
    recommendation:
      "40~50대는 즉시 매출 전환축, 30대는 반복구매·정기구매축, 10~20대는 미래고객·확산축, 60~70대는 상담형 신뢰구매축으로 분리 운영해야 합니다.",
    evidencePlan:
      "검색·조회·라이브시청·상담·장바구니·쿠폰·구매 데이터를 연령대별로 누적해 매주 수요예측 점수를 자동 보정합니다.",
  };
}

export function resetAgeForecastData() {
  localStorage.removeItem(AGE_STORAGE_KEY);
  return getAgeForecastData();
}
