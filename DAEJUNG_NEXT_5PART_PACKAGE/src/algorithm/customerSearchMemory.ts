export type SearchMemoryEvent = {
  customerKey: string;
  keyword: string;
  category?: string;
  productId?: string;
  clickCount?: number;
  dwellSeconds?: number;
  cartAdded?: boolean;
  createdAt: string;
};

export type RecommendationScore = {
  productId: string;
  score: number;
  reason: string;
};

export function scoreSearchMemory(events: SearchMemoryEvent[]): RecommendationScore[] {
  const scores = new Map<string, number>();
  for (const event of events) {
    if (!event.productId) continue;
    const base = scores.get(event.productId) ?? 0;
    const clickScore = (event.clickCount ?? 0) * 5;
    const dwellScore = Math.min(20, Math.floor((event.dwellSeconds ?? 0) / 10));
    const cartScore = event.cartAdded ? 15 : 0;
    scores.set(event.productId, base + 3 + clickScore + dwellScore + cartScore);
  }
  return [...scores.entries()]
    .map(([productId, score]) => ({ productId, score, reason: '검색·클릭·체류·장바구니 기반 관심 추천' }))
    .sort((a, b) => b.score - a.score);
}
