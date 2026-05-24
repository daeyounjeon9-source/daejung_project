# 운영 보안 체크리스트

## 필수
- 관리자 비밀번호 bcrypt 해시 사용
- JWT_SECRET 40자 이상
- DB 비밀번호 강력하게 변경
- SSH 비밀번호 로그인 차단 권장
- UFW 방화벽 사용
- HTTPS 강제
- 관리자 API rate limit 적용
- 정산/회계 변경 audit_logs 기록
- DB 백업 자동화
- 결제키는 서버 환경변수에만 저장

## 관리자 접근
- MASTER_OWNER 계정은 운영 전 별도 보관
- OTP는 실제 TOTP 방식으로 교체
- 관리자 로그인 실패 로그 저장
- 반복 실패 IP 차단
