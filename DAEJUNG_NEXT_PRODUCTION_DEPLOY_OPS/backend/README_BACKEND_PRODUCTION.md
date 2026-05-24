# Backend Production Guide

## 위치
/var/www/daejungnext/backend

## 실행
```bash
npm install
pm2 start ../deploy/pm2/ecosystem.config.cjs
pm2 save
```

## 확인
```bash
curl http://localhost:8080/api/health
curl https://api.daejungnext.com/api/health
```

## 중요
- .env.production.example을 .env로 복사
- JWT_SECRET 변경
- ADMIN_PASSWORD_HASH bcrypt 해시 적용
- DATABASE_URL 실제 DB로 변경
