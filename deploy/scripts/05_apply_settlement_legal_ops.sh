#!/usr/bin/env bash
set -e

echo "[DAEJUNG NEXT] PART 05 정산·회계·법무 운영 패키지 적용 확인"
echo "- settlementEngine.ts"
test -f backend/src/modules/settlement/settlementEngine.ts && echo "  OK" || echo "  MISSING"
echo "- auditLog.ts"
test -f backend/src/modules/audit/auditLog.ts && echo "  OK" || echo "  MISSING"
echo "- SettlementLegalAdminPanel.tsx"
test -f frontend/src/admin/SettlementLegalAdminPanel.tsx && echo "  OK" || echo "  MISSING"
echo "적용 확인 완료"
