# DAEJUNG NEXT 고객기억 AI 패치 적용 가이드

## 적용 위치

현재 Vite React 기준 전체 교체 파일입니다.

```text
프로젝트폴더/
├─ index.html
├─ package.json
├─ vite.config.js
├─ postcss.config.js
├─ tailwind.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ lib/customerMemoryEngine.js
   └─ components/
      ├─ ConsentBanner.jsx
      └─ CustomerMemoryPanel.jsx
```

## 실행

```bash
npm install
npm run dev
```

브라우저 주소:

```text
http://localhost:5173
```

## 포함 기능

- 검색어 기록
- 카테고리 관심도 점수화
- 상품 상세보기/체류시간 점수 반영
- 재접속 시 localStorage 기반 고객 기억
- 맞춤 상품 추천
- AI LIVE 추천
- LIVON 코인 보상 안내 구조
- 관리자 분석 패널
- 동의/비동의/기록 초기화 구조

## 상용화 연결 시 추가할 것

- 서버 DB 저장
- 로그인 user_id 연결
- 비회원 visitor_id 쿠키 연결
- 개인정보 처리방침
- 행태정보 수집 고지
- 추천/광고 활용 동의
- 데이터 삭제 요청 기능
- 보관기간/파기 정책
