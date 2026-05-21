import React from "react";

const GrowthLoopSystem = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                성장 루프 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-pink-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        자동 회원 확장
                    </h3>

                    <p className="text-gray-400">
                        추천 기반 글로벌 회원 증가 시스템
                    </p>
                </div>

                <div className="bg-gray-900 border border-pink-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        AI 재구매 유도
                    </h3>

                    <p className="text-gray-400">
                        사용자 행동 기반 자동 재구매 분석
                    </p>
                </div>

                <div className="bg-gray-900 border border-pink-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        글로벌 순환 구조
                    </h3>

                    <p className="text-gray-400">
                        판매 · 광고 · 유입 자동 성장 구조
                    </p>
                </div>

            </div>

        </div>
    );
};

export default GrowthLoopSystem;