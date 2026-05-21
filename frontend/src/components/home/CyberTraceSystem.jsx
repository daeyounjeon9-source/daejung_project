import React from "react";

const CyberTraceSystem = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-8">
                AI 공격 추적 센터
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-gray-900 border border-red-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-4">실시간 IP 추적</h3>
                    <p className="text-gray-400 text-sm">
                        공격자 IP, 위치, 공격 유형 실시간 기록
                    </p>
                </div>

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Honeypot 유도</h3>
                    <p className="text-gray-400 text-sm">
                        가짜 서버로 공격자를 유인하고 접근 기록 확보
                    </p>
                </div>

                <div className="bg-gray-900 border border-green-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">실시간 공격 분석</h3>
                    <p className="text-gray-400 text-sm">
                        AI 기반 공격 패턴 분석, 자동 알림 및 차단
                    </p>
                </div>

            </div>

            <div className="mt-10 bg-gray-900 border border-purple-500 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">글로벌 침입 로그</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

                    <div className="space-y-3">
                        <p>✔ IP, 위치, 공격 종류 기록</p>
                        <p>✔ 관리자 즉시 알림</p>
                        <p>✔ 실시간 공격 시각화</p>
                        <p>✔ 로그 자동 백업</p>
                    </div>

                    <div className="space-y-3">
                        <p>✔ AI 분석 기반 차단 추천</p>
                        <p>✔ Honeypot 데이터 저장</p>
                        <p>✔ 글로벌 서버 침입 대응</p>
                        <p>✔ 수사기관 제출용 증거 확보</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CyberTraceSystem;