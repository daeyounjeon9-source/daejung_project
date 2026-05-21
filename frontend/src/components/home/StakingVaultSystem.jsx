import React from "react";

const StakingVaultSystem = () => {
    return (
        <div className="text-white">

            <h2 className="text-3xl font-bold mb-8">
                DNX 스테이킹 & 지갑 시스템
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-900 border border-cyan-500 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                        운영 지갑 A
                    </h3>

                    <div className="text-5xl font-bold mb-4">
                        10%
                    </div>

                    <div className="space-y-2 text-gray-300 text-sm">
                        <p>✔ 플랫폼 운영 자금</p>
                        <p>✔ 유동성 관리</p>
                        <p>✔ 일일 출금 제한</p>
                        <p>✔ AI 감시 시스템</p>
                    </div>

                </div>

                <div className="bg-gray-900 border border-purple-500 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold text-purple-400 mb-4">
                        장기 락업 지갑 B
                    </h3>

                    <div className="text-5xl font-bold mb-4">
                        10%
                    </div>

                    <div className="space-y-2 text-gray-300 text-sm">
                        <p>✔ 장기 락업 유지</p>
                        <p>✔ TimeLock 적용</p>
                        <p>✔ 콜드월렛 저장</p>
                        <p>✔ 멀티시그 인증</p>
                    </div>

                </div>

                <div className="bg-gray-900 border border-blue-500 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold text-blue-400 mb-4">
                        글로벌 투자 지갑 C
                    </h3>

                    <div className="text-5xl font-bold mb-4">
                        10%
                    </div>

                    <div className="space-y-2 text-gray-300 text-sm">
                        <p>✔ 글로벌 투자 유치</p>
                        <p>✔ 거래소 대응</p>
                        <p>✔ 확장 운영 자금</p>
                        <p>✔ 다중 관리자 승인</p>
                    </div>

                </div>

            </div>

            <div className="mt-10 bg-gray-900 border border-green-500 rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-green-400 mb-6">
                    스테이킹 보상 시스템
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-black border border-green-500 rounded-2xl p-5">
                        <h4 className="font-bold mb-2">
                            Bronze
                        </h4>

                        <p className="text-gray-400 text-sm">
                            기본 스테이킹 보상
                        </p>
                    </div>

                    <div className="bg-black border border-cyan-500 rounded-2xl p-5">
                        <h4 className="font-bold mb-2">
                            Silver
                        </h4>

                        <p className="text-gray-400 text-sm">
                            중급 장기 보상
                        </p>
                    </div>

                    <div className="bg-black border border-purple-500 rounded-2xl p-5">
                        <h4 className="font-bold mb-2">
                            Gold
                        </h4>

                        <p className="text-gray-400 text-sm">
                            프리미엄 글로벌 혜택
                        </p>
                    </div>

                    <div className="bg-black border border-yellow-500 rounded-2xl p-5">
                        <h4 className="font-bold mb-2">
                            Diamond
                        </h4>

                        <p className="text-gray-400 text-sm">
                            최고 등급 특별 보상
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default StakingVaultSystem;