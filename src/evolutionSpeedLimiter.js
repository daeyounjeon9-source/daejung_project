
export const evolutionProtectionSystem = {
  sandboxLayer:true,
  riskScoreEngine:true,
  humanApprovalGate:true,
  gradualDeployment:true,
  blackSwanResponse:true,
  evolutionRateLimiter:true,
  realityCheckEngine:true,
  strategicSafeMode:true
};

export const deploymentStages = [
  "1% 테스트",
  "5% 테스트",
  "10% 테스트",
  "30% 제한 배포",
  "전체 적용"
];

export const blockedWithoutApproval = [
  "투자 전략",
  "VIP 정보",
  "코인 정책",
  "글로벌 전략",
  "가격 급변",
  "자동 사업 생성"
];
