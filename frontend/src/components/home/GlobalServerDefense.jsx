import React from "react";

const GlobalServerDefense = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-8">
                글로벌 서버 방어 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">
                        글로벌 서버
                    </h3>

                    <p className="text-gray-400 text-sm">
                        국가별 분산 서버 운영 시스템
                    </p>
                </div>

                <div className="bg-gray-900 border border-green-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">
                        실시간 백업
                    </h3>

                    <p className="text-gray-400 text-sm">
                        데이터 자동 백업 및 복구 구조
                    </p>
                </div>

                <div className="bg-gray-900 border border-yellow-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">
                        미러 노드
                    </h3>

                    <p className="text-gray-400 text-sm">
                        긴급 장애 대응 미러 서버 시스템
                    </p>
                </div>

                <div className="bg-gray-900 border border-red-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-4">
                        긴급 복구
                    </h3>

                    <p className="text-gray-400 text-sm">
                        서버 공격 시 자동 복구 시스템
                    </p>
                </div>

            </div>

            <div className="mt-10 bg-gray-900 border border-cyan-500 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                    분산 방어 네트워크
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

                    <div className="space-y-3">
                        <p>✔ 글로벌 CDN 자동 분산</p>
                        <p>✔ 실시간 서버 상태 감시</p>
                        <p>✔ AI 기반 부하 분산</p>
                        <p>✔ 국가별 장애 자동 우회</p>
                    </div>

                    <div className="space-y-3">
                        <p>✔ 블록체인 노드 분산 저장</p>
                        <p>✔ 실시간 데이터 동기화</p>
                        <p>✔ 긴급 장애 자동 복구</p>
                        <p>✔ 글로벌 보안 백업 유지</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default GlobalServerDefense;