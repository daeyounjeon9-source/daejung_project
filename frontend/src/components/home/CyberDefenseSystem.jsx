import React from "react";

const CyberDefenseSystem = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-8">
                AI 사이버 디펜스 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="bg-gray-900 border border-red-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-4">
                        해킹 탐지
                    </h3>

                    <p className="text-gray-400 text-sm">
                        AI 기반 비정상 접근 실시간 감지
                    </p>
                </div>

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">
                        서버 방어
                    </h3>

                    <p className="text-gray-400 text-sm">
                        글로벌 서버 트래픽 자동 보호
                    </p>
                </div>

                <div className="bg-gray-900 border border-yellow-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">
                        IP 차단
                    </h3>

                    <p className="text-gray-400 text-sm">
                        위험 국가 및 공격 IP 자동 차단
                    </p>
                </div>

                <div className="bg-gray-900 border border-green-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">
                        긴급 잠금
                    </h3>

                    <p className="text-gray-400 text-sm">
                        해킹 감지 시 전체 시스템 즉시 보호
                    </p>
                </div>

            </div>

            <div className="mt-10 bg-gray-900 border border-red-500 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-red-400 mb-6">
                    글로벌 보안 관제 센터
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

                    <div className="space-y-3">
                        <p>✔ 24시간 실시간 보안 모니터링</p>
                        <p>✔ AI 위험 패턴 자동 분석</p>
                        <p>✔ 서버 공격 자동 우회 시스템</p>
                        <p>✔ 블록체인 이상 거래 탐지</p>
                    </div>

                    <div className="space-y-3">
                        <p>✔ 관리자 접근 이중 인증</p>
                        <p>✔ 긴급 자산 보호 이동</p>
                        <p>✔ 글로벌 로그 백업 저장</p>
                        <p>✔ 다중 서버 분산 방어 구조</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CyberDefenseSystem;