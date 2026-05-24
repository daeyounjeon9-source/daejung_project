# 보안 체크리스트

- JWT_SECRET 운영용으로 변경
- ADMIN_PASSWORD_HASH bcrypt 해시 적용
- OTP는 실제 TOTP 앱으로 교체
- DB 외부 접근 제한
- HTTPS 강제 적용
- 관리자 접근 IP 제한 검토
- 모든 정산/회계 변경 audit_logs 저장
- 결제 API는 PG사 운영키 분리
