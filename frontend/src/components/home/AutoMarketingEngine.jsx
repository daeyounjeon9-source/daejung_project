import React from "react";

const AutoMarketingEngine = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                자동 마케팅 엔진
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-yellow-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        SNS 자동 배포
                    </h3>

                    <p className="text-gray-400">
                        글로벌 SNS 채널 자동 홍보 시스템
                    </p>
                </div>

                <div className="bg-gray-900 border border-yellow-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        AI 광고 최적화
                    </h3>

                    <p className="text-gray-400">
                        광고 효율 실시간 자동 분석
                    </p>
                </div>

                <div className="bg-gray-900 border border-yellow-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        타겟 자동 추천
                    </h3>

                    <p className="text-gray-400">
                        국가별 고객 자동 타겟팅 엔진
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AutoMarketingEngine;