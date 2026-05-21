import React from "react";

const GlobalExposure = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                글로벌 노출 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-blue-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        글로벌 검색 노출
                    </h3>

                    <p className="text-gray-400">
                        국가별 검색 플랫폼 자동 노출 시스템
                    </p>
                </div>

                <div className="bg-gray-900 border border-blue-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        다국어 자동 변환
                    </h3>

                    <p className="text-gray-400">
                        AI 기반 실시간 글로벌 언어 지원
                    </p>
                </div>

                <div className="bg-gray-900 border border-blue-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        해외 유입 분석
                    </h3>

                    <p className="text-gray-400">
                        글로벌 사용자 행동 데이터 분석
                    </p>
                </div>

            </div>

        </div>
    );
};

export default GlobalExposure;