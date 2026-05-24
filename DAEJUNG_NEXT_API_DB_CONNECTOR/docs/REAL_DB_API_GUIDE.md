# DAEJUNG NEXT 실제 DB/API 연결 가이드

## 실행 순서

1. PostgreSQL 생성
2. DATABASE_URL 설정
3. schema.sql 실행
4. backend npm install
5. npm start
6. /api/health 확인
7. 프론트에서 API 주소 연결

## 핵심 API

- POST /api/auth/admin-login
- GET /api/products
- POST /api/products
- POST /api/orders
- GET /api/orders/recent
- GET /api/finance/ledger
- POST /api/finance/ledger
- GET /api/analytics/market
- GET /api/analytics/best-products
- GET /api/analytics/slow-products
