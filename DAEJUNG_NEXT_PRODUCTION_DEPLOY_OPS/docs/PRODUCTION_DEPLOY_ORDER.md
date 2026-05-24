# DAEJUNG NEXT 실제 배포 순서

## 1단계 서버 준비
```bash
bash deploy/scripts/01_server_prepare.sh
```

## 2단계 파일 업로드
프로젝트 전체를 /var/www/daejungnext 로 업로드

## 3단계 환경변수 설정
backend/.env 생성
frontend/.env.production 생성

## 4단계 프론트 빌드
```bash
bash deploy/scripts/02_build_frontend.sh
```

## 5단계 백엔드 실행
```bash
bash deploy/scripts/03_start_backend.sh
```

## 6단계 Nginx 연결
```bash
bash deploy/scripts/04_enable_nginx.sh
```

## 7단계 SSL 적용
```bash
bash deploy/scripts/05_ssl_certbot.sh
```

## 8단계 확인
- https://daejungnext.com
- https://api.daejungnext.com/api/health
