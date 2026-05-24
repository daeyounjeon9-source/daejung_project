import { setBehaviorConsent } from "../lib/customerMemoryEngine";

export default function ConsentBanner({ consent, onChange }) {
  if (consent) return null;

  return (
    <section className="consent-banner">
      <div>
        <b>DAEJUNG NEXT 고객기억 AI 적용</b>
        <p>
          검색어·상품조회·라이브 반응을 저장해 재접속 시 맞춤 상품, LIVE, 쿠폰, 코인혜택을 추천합니다.
          실제 서비스에서는 개인정보 처리방침, 쿠키 고지, 행태정보 수집 동의와 삭제 기능을 함께 제공해야 합니다.
        </p>
      </div>
      <div className="consent-actions">
        <button
          className="ghost-btn"
          onClick={() => {
            const memory = setBehaviorConsent(false);
            onChange(memory);
          }}
        >
          비동의
        </button>
        <button
          className="primary-btn"
          onClick={() => {
            const memory = setBehaviorConsent(true);
            onChange(memory);
          }}
        >
          동의하고 AI 추천 시작
        </button>
      </div>
    </section>
  );
}
