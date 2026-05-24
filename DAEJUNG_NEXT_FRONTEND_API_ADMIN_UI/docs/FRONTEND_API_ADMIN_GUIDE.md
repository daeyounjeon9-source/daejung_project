# 프론트 API 관리자 UI 연결 가이드

## 실행
```bash
cd frontend
npm install
npm run dev
```

## API 주소 설정
`.env` 파일 생성:
```bash
VITE_API_BASE=http://localhost:8080
```

운영 배포 시:
```bash
VITE_API_BASE=https://api.daejungnext.com
```

## 포함 화면
- 관리자 로그인
- API Health 상태
- 국가/도시별 판매 분석
- 잘 팔리는 상품
- 안 팔리는 상품
- 실시간 운영 패널
