# 운영 런북

## 서버 상태 확인
```bash
pm2 status
sudo systemctl status nginx
df -h
free -m
```

## 백엔드 로그 확인
```bash
pm2 logs daejung-next-api
```

## 재시작
```bash
pm2 restart daejung-next-api
sudo systemctl reload nginx
```

## 장애 대응
1. 사이트 접속 불가 → nginx 상태 확인
2. API 오류 → pm2 logs 확인
3. DB 오류 → DATABASE_URL 및 DB 상태 확인
4. SSL 오류 → certbot renew 확인
5. 도메인 오류 → DNS A 레코드 확인
