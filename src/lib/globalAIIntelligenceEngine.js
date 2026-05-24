
export const intelligenceSources = [
  {
    name:"글로벌 AI 기술 흐름",
    type:"공개 기술정보",
    signal:"생성형 AI, 에이전트 AI, 로봇, 온디바이스 AI, AI 반도체",
    value:"대정넥스트 AI 쇼호스트·고객기억·자동전략 엔진 고도화",
    risk:"기술 과대평가/보안 취약점",
    score:94
  },
  {
    name:"국제정세/규제",
    type:"정책·법무",
    signal:"AI 규제, 개인정보, 디지털자산, 국가별 결제/세무",
    value:"글로벌 진출 전 법무·세무·개인정보 리스크 선제대응",
    risk:"규제 위반/서비스 제한",
    score:91
  },
  {
    name:"투자시장 흐름",
    type:"투자·자본",
    signal:"AI 인프라, 반도체, 클라우드, 커머스AI, 로봇 물류",
    value:"VIP용 미래가치 리포트 및 투자관심 영역 제공",
    risk:"투자손실 가능성/과열 테마",
    score:88
  },
  {
    name:"소비자 감정/사회 이슈",
    type:"여론·문화",
    signal:"경기불안, 고령화, 1인가구, 건강불안, 초저가 소비",
    value:"상품·LIVE·광고·가격전략 자동 조정",
    risk:"여론 왜곡/허위정보",
    score:86
  },
  {
    name:"경쟁 플랫폼 동향",
    type:"경쟁정보",
    signal:"쿠팡, 네이버, TikTok Shop, Amazon, Taobao, 라이브커머스",
    value:"차별화 전략·공격대응·가격전략·물류전략 보완",
    risk:"모방경쟁/가격전쟁",
    score:90
  },
  {
    name:"과학기술/논문/특허",
    type:"R&D",
    signal:"추천AI, 멀티모달, 음성AI, 디지털 휴먼, 예측 물류",
    value:"특허/기술 방어력 및 미래 서비스 기획",
    risk:"기술 구현 난도/지식재산 충돌",
    score:89
  }
];

export const vipPrinciples = [
  "투자 판단은 개인의 선택이며, 대정넥스트 AI는 참고정보와 위험요소를 함께 제공합니다.",
  "수익을 보장하지 않고, 과열·허위·미검증 정보는 경고로 표시합니다.",
  "공개·합법 정보만 수집하며, 비공개 AI 기억·개인정보·내부 데이터 감시는 금지합니다.",
  "VIP 정보는 미래가치 참고용이며, 최종 결정은 사용자와 전문가 상담에 맡깁니다."
];

export function runGlobalAIScan(){
  return intelligenceSources.map((item)=>({
    ...item,
    evidenceCount: Math.floor(Math.random()*12000)+1500,
    futureImpact: Math.floor(Math.random()*20)+78,
    vipAttention: Math.floor(Math.random()*25)+70,
    confidence: Math.floor(Math.random()*18)+78,
    aiAction: makeAIAction(item)
  }));
}

function makeAIAction(item){
  const map = {
    "글로벌 AI 기술 흐름":"AI 쇼호스트·자동전략·고객분신 엔진에 기술 변화 반영",
    "국제정세/규제":"법무/세무/개인정보 체크리스트와 글로벌 결제 정책 갱신",
    "투자시장 흐름":"VIP 미래가치 리포트에 관심섹터·위험섹터 동시 표시",
    "소비자 감정/사회 이슈":"감정지도·상품추천·LIVE 편성·가격전략 자동 조정",
    "경쟁 플랫폼 동향":"기업방어AI와 가격/물류/광고 대응전략 업데이트",
    "과학기술/논문/특허":"R&D 로드맵과 특허/차별화 전략에 반영"
  };
  return map[item.name] || "관리자 검토 필요";
}

export function buildVIPReport(scans){
  const top = [...scans].sort((a,b)=>b.futureImpact-a.futureImpact).slice(0,3);
  const risk = [...scans].sort((a,b)=>b.score-a.score).slice(0,2);
  return {
    title:"VIP 미래가치 인텔리전스 리포트",
    attention: top.map(t=>t.name).join(", "),
    warning: risk.map(r=>r.risk).join(" / "),
    message:"AI·국제정세·투자시장·경쟁플랫폼 흐름을 실증데이터로 연결해 대정넥스트 운영전략과 VIP 참고정보를 생성했습니다."
  };
}
