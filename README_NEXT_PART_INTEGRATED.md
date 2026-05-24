# DAEJUNG NEXT NEXT PART INTEGRATED PACKAGE

이번 통합본 포함 범위:

1. DAEJUNG_NEXT_GLOBAL_COMMAND_CENTER
   - 글로벌 지휘센터 운영 문서 001~190
   - 통합 관제, 리스크, 성장/보완 원칙 문서

2. DAEJUNG_NEXT_API_DB_CONNECTOR
   - backend API 서버 기본 구조
   - auth/products/orders/finance/analytics routes
   - DB 연결 파일 및 schema.sql
   - 실제 DB/API 연결 가이드

3. DAEJUNG_NEXT_FRONTEND_API_ADMIN_UI
   - frontend 관리자 API 연동 UI
   - App.jsx, style.css, API client
   - 프론트/API 관리자 연결 가이드

4. DAEJUNG_NEXT_PRODUCTION_DEPLOY_OPS
   - production 배포 스크립트
   - nginx / pm2 / ssl / monitoring / security 문서

권장 적용 순서:

1) API_DB_CONNECTOR 적용
2) FRONTEND_API_ADMIN_UI 적용
3) PRODUCTION_DEPLOY_OPS 적용
4) GLOBAL_COMMAND_CENTER 문서는 운영 기준서로 보관

초보자 기준 실행 순서:

- 먼저 압축을 풀고 각 폴더를 확인
- 기존 프로젝트에 덮어씌우기 전 백업 권장
- backend/package.json 확인 후 npm install
- frontend/package.json 확인 후 npm install
- 운영 배포는 deploy/scripts 번호 순서대로 진행

주의:
- 실운영 DB 비밀번호, 관리자 비밀번호, API KEY는 .env.example에 직접 넣지 말고 실제 서버의 .env에만 입력
- OTP/마스터 접근 정보는 코드에 고정 저장 금지
- 정산/회계/세무는 실제 운영 전 세무사/회계사 검토 필요
