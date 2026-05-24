
export const securityLayers = [
  {
    layer:"1차 보안",
    name:"MASTER OWNER 단독 접근",
    purpose:"전대연 단독 열람/승인 권한",
    method:"MFA, OWNER KEY, 접근 로그, 권한 분리",
    status:"필수",
    score:97
  },
  {
    layer:"2차 보안",
    name:"전략정보 분리 저장",
    purpose:"초진화 알고리즘·VIP 리포트·투자예측 정보 분리",
    method:"PRIVATE CORE 저장소, 암호화, 다운로드 제한, 내부 관리자 차단",
    status:"필수",
    score:96
  },
  {
    layer:"3차 보안",
    name:"이상접근/유출 탐지",
    purpose:"비인가 접근, 복사, 외부전송, 과도한 조회 탐지",
    method:"Zero Trust, 감사로그, IP 제한, 비정상 행동 경고, 즉시 잠금",
    status:"필수",
    score:98
  }
];

export const intelligencePipelines = [
  {
    name:"기업투자 흐름 감지",
    source:"공개 투자시장, 산업보고서, 기업공시, VC/IPO 흐름",
    analysis:"AI·반도체·커머스·로봇물류·클라우드·헬스케어 성장 흐름 분석",
    prediction:"대정넥스트 미래가치/투자자 리포트에 반영",
    secrecy:"OMEGA BLACK",
    score:92
  },
  {
    name:"국가정책/규제 감지",
    source:"정부정책, AI규제, 개인정보, 디지털자산, 세무/관세",
    analysis:"국가별 진출 가능성, 금지/주의 산업, 세무 리스크 예측",
    prediction:"글로벌 결제·세무·법무 대응 알고리즘에 반영",
    secrecy:"OMEGA BLACK",
    score:95
  },
  {
    name:"국제정세/경제위험 감지",
    source:"국제뉴스, 환율, 원자재, 분쟁, 공급망, 소비심리",
    analysis:"국가별 수요 하락/상승, 물류 위험, 가격변동 가능성 예측",
    prediction:"재고·가격·물류·글로벌 LIVE 전략에 반영",
    secrecy:"OMEGA BLACK",
    score:90
  },
  {
    name:"AI 기술발전 감지",
    source:"논문, 특허, 공개 기술자료, AI 모델/에이전트 동향",
    analysis:"AI쇼호스트·고객분신·감정지도·자동운영 고도화 방향 추출",
    prediction:"대정넥스트 초진화 알고리즘 업데이트",
    secrecy:"OMEGA BLACK",
    score:94
  },
  {
    name:"경쟁사/플랫폼 동향 감지",
    source:"쿠팡, 네이버, TikTok, Amazon, Taobao, 홈쇼핑 기업 공개동향",
    analysis:"가격공세, 물류확장, LIVE전략, AI광고, 크리에이터 생태계 비교",
    prediction:"기업방어AI·자동전략수정·차별화 전략에 반영",
    secrecy:"OMEGA BLACK",
    score:93
  },
  {
    name:"소비자 감정/사회흐름 감지",
    source:"공개 여론, 검색트렌드, 사회이슈, 연령별 소비성향",
    analysis:"불안, 고립, 건강, 초저가, 고령화, 1인가구 소비 방향 분석",
    prediction:"상품추천·광고·LIVE·VIP 미래가치 보고에 반영",
    secrecy:"PRIVATE",
    score:89
  }
];

export function runTripleSecurityScan(){
  return {
    security: securityLayers.map((item)=>({
      ...item,
      integrity: Math.min(100, item.score + Math.floor(Math.random()*5)),
      alert: item.score >= 97 ? "강화유지" : "추가보강"
    })),
    intelligence: intelligencePipelines.map((item)=>({
      ...item,
      evidence: Math.floor(Math.random()*18000)+3000,
      confidence: Math.floor(Math.random()*16)+82,
      futureImpact: Math.floor(Math.random()*18)+80,
      command: makeCommand(item.name)
    })),
    timestamp: new Date().toLocaleTimeString()
  };
}

function makeCommand(name){
  const map = {
    "기업투자 흐름 감지":"VIP 리포트에 투자관심 섹터·주의섹터·미래가치 시나리오를 동시 반영",
    "국가정책/규제 감지":"국가별 법무/세무/개인정보 체크리스트를 자동 갱신",
    "국제정세/경제위험 감지":"환율·물류·가격전략·재고배치 알고리즘에 위험점수 반영",
    "AI 기술발전 감지":"초진화 알고리즘과 AI쇼호스트/R&D 로드맵에 기술변화 반영",
    "경쟁사/플랫폼 동향 감지":"기업방어AI와 차별화 전략을 자동 재학습",
    "소비자 감정/사회흐름 감지":"감정지도·연령별 추천·광고 자동생성에 반영"
  };
  return map[name] || "관리자 검토 필요";
}

export function buildSecretPredictionSummary(scan){
  const avgSecurity = Math.round(scan.security.reduce((a,b)=>a+b.integrity,0)/scan.security.length);
  const topIntel = [...scan.intelligence].sort((a,b)=>b.futureImpact-a.futureImpact)[0];
  return {
    securityScore: avgSecurity,
    topSignal: topIntel.name,
    ownerCommand:"MASTER OWNER 전대연 단독 승인 후 전략 알고리즘에 반영",
    prediction:"투자·국가정책·국제정세·AI기술 흐름을 분리 습득하여 대정넥스트 미래전략과 VIP 참고정보에 반영합니다."
  };
}
