
export const countries = [
  {
    country:"대한민국",
    lang:"한국어",
    trend:"건강식품·라이브커머스·가성비",
    currency:"KRW",
    rate:"₩1",
    growth:88,
    risk:"중간",
    strategy:"40~50대 건강식품 LIVE + 20대 숏폼 추천 강화",
  },
  {
    country:"미국",
    lang:"English",
    trend:"AI기기·헬스·프리미엄 소비",
    currency:"USD",
    rate:"$1 = ₩1380",
    growth:82,
    risk:"중간",
    strategy:"AI추천 기반 프리미엄 글로벌 LIVE",
  },
  {
    country:"일본",
    lang:"日本語",
    trend:"고령친화·정기구매·신뢰소비",
    currency:"JPY",
    rate:"¥100 = ₩920",
    growth:76,
    risk:"낮음",
    strategy:"고령층 친화 UI·상담형 AI 쇼호스트",
  },
  {
    country:"중국",
    lang:"中文",
    trend:"초저가·초고속 소비·대규모 트래픽",
    currency:"CNY",
    rate:"¥1 = ₩190",
    growth:93,
    risk:"높음",
    strategy:"가격경쟁 대신 AI·코인경제·실증데이터 차별화",
  },
  {
    country:"동남아",
    lang:"English/Local",
    trend:"모바일 중심·라이브 쇼핑 성장",
    currency:"Mixed",
    rate:"실시간 환율",
    growth:91,
    risk:"중간",
    strategy:"모바일 LIVE·게임형 코인 미션 강화",
  }
];

export function simulateRealtimeGlobalScan() {
  return countries.map((c) => ({
    ...c,
    liveUsers: Math.floor(Math.random()*90000)+5000,
    conversion: (Math.random()*6+1).toFixed(1),
    aiConfidence: Math.floor(Math.random()*25)+72,
  }));
}
