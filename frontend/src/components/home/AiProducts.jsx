import React from "react";

const AiProducts = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                AI 상품 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        자동 상품 분석
                    </h3>

                    <p className="text-gray-400">
                        AI 기반 실시간 상품 데이터 분석 시스템
                    </p>
                </div>

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        글로벌 추천 엔진
                    </h3>

                    <p className="text-gray-400">
                        국가별 자동 추천 알고리즘 적용
                    </p>
                </div>

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        실시간 판매 추적
                    </h3>

                    <p className="text-gray-400">
                        라이브 판매 흐름 자동 추적 시스템
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AiProducts;