import React from "react";

const CoinSecuritySystem = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-8">
                DNX 코인 보안 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                        운영 지갑 A
                    </h3>

                    <div className="text-5xl font-bold mb-4">
                        10%
                    </div>

                    <p className="text-gray-400 mb-4">
                        플랫폼 운영 및 유동성 관리
                    </p>

                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>✔ 일일 출금 제한</li>
                        <li>✔ AI 위험 감지</li>
                        <li>✔ 관리자 승인</li>
                        <li>✔ 실시간 로그 기록</li>
                    </ul>
                </div>

                <div className="bg-gray-900 border border-purple-500 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">
                        장기 락업 지갑 B
                    </h3>

                    <div className="text-5xl font-bold mb-4">
                        10%
                    </div>

                    <p className="text-gray-400 mb-4">
                        장기 보유 및 시장 안정화
                    </p>

                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>✔ 멀티시그 보안</li>
                        <li>✔ 콜드월렛 보관</li>
                        <li>✔ TimeLock 적용</li>
                        <li>✔ 장기 락업 유지</li>
                    </ul>
                </div>

                <div className="bg-gray-900 border border-blue-500 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">
                        글로벌 확장 지갑 C
                    </h3>

                    <div className="text-5xl font-bold mb-4">
                        10%
                    </div>

                    <p className="text-gray-400 mb-4">
                        글로벌 투자 및 확장 전략
                    </p>

                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>✔ 2차 관리자 승인</li>
                        <li>✔ 국가별 접근 제한</li>
                        <li>✔ 투자 감사 로그</li>
                        <li>✔ 이상 거래 자동 차단</li>
                    </ul>
                </div>

            </div>

            <div className="mt-10 bg-gray-900 border border-green-500 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-green-400 mb-6">
                    보안 강화 시스템
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

                    <div className="space-y-3">
                        <p>✔ AI 실시간 해킹 감지</p>
                        <p>✔ 출금 시간 지연 시스템</p>
                        <p>✔ 관리자 행동 로그 저장</p>
                        <p>✔ 비정상 접속 자동 차단</p>
                    </div>

                    <div className="space-y-3">
                        <p>✔ 긴급 자산 이동 시스템</p>
                        <p>✔ 서버 접근 다중 인증</p>
                        <p>✔ 글로벌 보안 모니터링</p>
                        <p>✔ 실시간 위험 분석 엔진</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CoinSecuritySystem;