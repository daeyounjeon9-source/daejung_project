import React from "react";

const AiCenter = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-6">
                AI 중앙 제어 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-purple-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        AI 방송 제어
                    </h3>

                    <p className="text-gray-400">
                        라이브커머스 자동 운영 AI
                    </p>
                </div>

                <div className="bg-gray-900 border border-purple-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        자동 응답 시스템
                    </h3>

                    <p className="text-gray-400">
                        실시간 고객 AI 대응 엔진
                    </p>
                </div>

                <div className="bg-gray-900 border border-purple-500 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                        데이터 학습 엔진
                    </h3>

                    <p className="text-gray-400">
                        글로벌 판매 데이터 자동 학습
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AiCenter;