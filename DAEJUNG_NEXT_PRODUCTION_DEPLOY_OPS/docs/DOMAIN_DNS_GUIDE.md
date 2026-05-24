# daejungnext.com DNS 연결 가이드

## DNS 설정

A 레코드:
- daejungnext.com → 서버 IPv4 주소
- api.daejungnext.com → 서버 IPv4 주소

CNAME:
- www → daejungnext.com

## 확인 명령
```bash
nslookup daejungnext.com
nslookup api.daejungnext.com
```

## 연결 순서
1. 서버 IP 확인
2. 도메인 DNS에 A 레코드 입력
3. DNS 전파 대기
4. Nginx 설정
5. SSL 적용
6. 브라우저 접속 확인
