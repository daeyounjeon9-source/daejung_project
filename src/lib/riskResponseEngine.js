
export const riskSystems = [
  {
    name:"CORE 3중 분리 보안",
    danger:"중앙집중·권한탈취",
    response:"PUBLIC / PRIVATE / OMEGA BLACK 완전 분리",
    priority:"최상",
    status:"적용"
  },
  {
    name:"AI 오판 방지",
    danger:"AI 잘못된 투자·추천·가격전략",
    response:"인간 승인 + 샌드박스 + 시뮬레이션",
    priority:"최상",
    status:"적용"
  },
  {
    name:"실증데이터 검증",
    danger:"실제 사용자 반응 미확인",
    response:"A/B 테스트 + 실제 LIVE 데이터 수집",
    priority:"높음",
    status:"적용"
  },
  {
    name:"기업방어 AI",
    danger:"여론공격·가격공세·허위리뷰",
    response:"위험감지·자동경고·로그기록",
    priority:"최상",
    status:"적용"
  },
  {
    name:"코인 보호",
    danger:"지갑탈취·규제·이상거래",
    response:"멀티시그·콜드월렛·거래감사",
    priority:"최상",
    status:"적용"
  },
  {
    name:"개인정보 보호",
    danger:"행태정보·감정분석 규제",
    response:"익명화·옵트인·분리저장",
    priority:"최상",
    status:"적용"
  },
  {
    name:"운영비 폭발 방지",
    danger:"AI 상시실행 비용 증가",
    response:"이벤트 기반 AI 활성화",
    priority:"높음",
    status:"적용"
  },
  {
    name:"AI 폭주 차단",
    danger:"자동화 오류",
    response:"Kill Switch + Human Override",
    priority:"최상",
    status:"적용"
  },
  {
    name:"내부자 공격 대응",
    danger:"관리자 권한남용",
    response:"세션기록·행동감시·다운로드 제한",
    priority:"최상",
    status:"적용"
  }
];

export function buildMasterStrategy(){
  return {
    title:"DAEJUNG NEXT MASTER RISK RESPONSE",
    philosophy:"실증데이터 기반 AI 운영체계",
    strategy:[
      "1단계: 안정성 확보",
      "2단계: 실사용 확보",
      "3단계: AI 자동화 확대",
      "4단계: 초진화 자율운영 기업"
    ]
  }
}
