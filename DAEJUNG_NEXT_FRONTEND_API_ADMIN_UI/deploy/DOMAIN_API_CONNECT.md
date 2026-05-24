# 도메인/API 연결 구조

## 권장 구조
- https://daejungnext.com → 프론트엔드
- https://api.daejungnext.com → 백엔드 API
- PostgreSQL → 사설 DB 또는 클라우드 DB

## 연결 순서
1. 프론트 build
2. 프론트 서버 업로드
3. 백엔드 API 서버 실행
4. api.daejungnext.com DNS 연결
5. SSL 적용
6. VITE_API_BASE를 운영 API 주소로 설정
7. 프론트 재빌드
