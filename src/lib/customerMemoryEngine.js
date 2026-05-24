const STORAGE_KEY = "DAEJUNG_NEXT_CUSTOMER_MEMORY_AI_V1";
const CONSENT_KEY = "DAEJUNG_NEXT_BEHAVIOR_CONSENT_V1";

const productCatalog = [
  { id: "P-1001", name: "프리미엄 홍삼 스틱", category: "건강식품", price: "39,900원", tag: "재검색 고객 전용 혜택", scoreBoost: 12 },
  { id: "P-1002", name: "저당 단백질 쉐이크", category: "건강식품", price: "29,900원", tag: "건강 관심 추천", scoreBoost: 8 },
  { id: "P-2001", name: "초경량 러닝화", category: "운동용품", price: "59,000원", tag: "운동 키워드 추천", scoreBoost: 10 },
  { id: "P-2002", name: "홈트레이닝 밴드 세트", category: "운동용품", price: "19,900원", tag: "재방문 쿠폰 가능", scoreBoost: 7 },
  { id: "P-3001", name: "프리미엄 햅쌀 10kg", category: "식품", price: "34,900원", tag: "생활 장바구니 추천", scoreBoost: 9 },
  { id: "P-4001", name: "스마트 무선 청소기", category: "생활가전", price: "129,000원", tag: "고관심 상품", scoreBoost: 11 },
];

const keywordCategoryMap = {
  "홍삼": "건강식품",
  "건강": "건강식품",
  "영양제": "건강식품",
  "단백질": "건강식품",
  "운동화": "운동용품",
  "러닝": "운동용품",
  "운동": "운동용품",
  "홈트": "운동용품",
  "쌀": "식품",
  "김치": "식품",
  "과일": "식품",
  "청소기": "생활가전",
  "가전": "생활가전",
  "선풍기": "생활가전",
};

const defaultMemory = {
  visitorId: "",
  searches: [],
  viewedProducts: [],
  categoryScores: {},
  liveScores: {},
  lastVisitAt: "",
  consent: false,
};

function createVisitorId() {
  return `DNX-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function hasBehaviorConsent() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function setBehaviorConsent(accepted) {
  localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "rejected");
  const memory = getCustomerMemory();
  memory.consent = accepted;
  saveCustomerMemory(memory);
  return memory;
}

export function getCustomerMemory() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    const memory = {
      ...defaultMemory,
      visitorId: createVisitorId(),
      lastVisitAt: new Date().toISOString(),
      consent: hasBehaviorConsent(),
    };
    saveCustomerMemory(memory);
    return memory;
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      ...defaultMemory,
      ...parsed,
      consent: hasBehaviorConsent(),
    };
  } catch {
    const memory = {
      ...defaultMemory,
      visitorId: createVisitorId(),
      lastVisitAt: new Date().toISOString(),
      consent: hasBehaviorConsent(),
    };
    saveCustomerMemory(memory);
    return memory;
  }
}

export function saveCustomerMemory(memory) {
  const cleanMemory = {
    ...memory,
    searches: memory.searches.slice(-30),
    viewedProducts: memory.viewedProducts.slice(-40),
    lastVisitAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanMemory));
  return cleanMemory;
}

export function clearCustomerMemory() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(CONSENT_KEY);
  return getCustomerMemory();
}

function detectCategory(keyword) {
  const normalized = keyword.trim().toLowerCase();
  const found = Object.keys(keywordCategoryMap).find((key) => normalized.includes(key.toLowerCase()));
  return found ? keywordCategoryMap[found] : "관심상품";
}

export function trackSearch(keyword) {
  const memory = getCustomerMemory();
  const safeKeyword = keyword.trim();
  if (!safeKeyword) return memory;

  const category = detectCategory(safeKeyword);
  const event = {
    keyword: safeKeyword,
    category,
    type: "search",
    score: 3,
    timestamp: new Date().toISOString(),
  };

  memory.searches = [event, ...memory.searches];
  memory.categoryScores[category] = (memory.categoryScores[category] || 0) + 3;
  memory.liveScores[category] = (memory.liveScores[category] || 0) + 2;

  return saveCustomerMemory(memory);
}

export function trackProductView(product, seconds = 18) {
  const memory = getCustomerMemory();
  const stayBonus = seconds >= 30 ? 8 : seconds >= 10 ? 5 : 2;
  const score = 5 + stayBonus;

  const event = {
    id: product.id,
    name: product.name,
    category: product.category,
    type: "view",
    staySeconds: seconds,
    score,
    timestamp: new Date().toISOString(),
  };

  memory.viewedProducts = [event, ...memory.viewedProducts];
  memory.categoryScores[product.category] = (memory.categoryScores[product.category] || 0) + score;
  memory.liveScores[product.category] = (memory.liveScores[product.category] || 0) + Math.round(score / 2);

  return saveCustomerMemory(memory);
}

export function getTopCategories(memory = getCustomerMemory()) {
  return Object.entries(memory.categoryScores)
    .sort((a, b) => b[1] - a[1])
    .map(([category, score]) => ({ category, score }));
}

export function getRecommendedProducts(memory = getCustomerMemory()) {
  const scores = memory.categoryScores || {};
  return productCatalog
    .map((product) => ({
      ...product,
      aiScore: (scores[product.category] || 0) + product.scoreBoost,
      reason: scores[product.category]
        ? `${product.category} 관심도 ${scores[product.category]}점 기반`
        : "신규 고객 기본 추천",
    }))
    .sort((a, b) => b.aiScore - a.aiScore)
    .slice(0, 4);
}

export function getRecommendedLive(memory = getCustomerMemory()) {
  const top = getTopCategories(memory)[0];
  const category = top?.category || "건강식품";
  return {
    title: `${category} AI LIVE 특가전`,
    subtitle: top
      ? `최근 ${category} 관심도가 높아 상단 노출됩니다.`
      : "첫 방문 고객에게 인기 LIVE를 추천합니다.",
    benefit: "라이브 시청 + 검색 참여 시 LIVON 코인 보상",
    score: top?.score || 12,
  };
}

export function getAdminInsight(memory = getCustomerMemory()) {
  const topCategories = getTopCategories(memory);
  const totalSearches = memory.searches.length;
  const totalViews = memory.viewedProducts.length;
  const topKeyword = memory.searches[0]?.keyword || "아직 없음";
  const conversionPotential =
    totalViews >= 3 || topCategories[0]?.score >= 20
      ? "높음"
      : totalSearches >= 2
      ? "중간"
      : "낮음";

  return {
    visitorId: memory.visitorId,
    consent: memory.consent,
    totalSearches,
    totalViews,
    topKeyword,
    topCategories,
    conversionPotential,
    nextAction:
      conversionPotential === "높음"
        ? "개인 쿠폰·라이브 알림·코인 보상을 즉시 노출"
        : "검색어 기반 추천과 인기 카테고리 노출 유지",
  };
}
