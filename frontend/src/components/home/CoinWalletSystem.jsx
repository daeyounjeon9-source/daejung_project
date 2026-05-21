import React from "react";

const CoinWalletSystem = () => {
    return (
        <div className="text-white">

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                    DNX 코인 지갑 시스템
                </h2>

                <div className="flex items-center gap-2">

                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>

                    <span className="text-cyan-400 font-bold">
                        WALLET ACTIVE
                    </span>

                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* 메인지갑 */}
                <div className="xl:col-span-2">

                    <div className="bg-gray-900 border border-cyan-500 rounded-3xl p-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="bg-black border border-cyan-500 rounded-2xl p-6">

                                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                                    운영 지갑 A
                                </h3>

                                <div className="text-4xl font-bold mb-4">
                                    10%
                                </div>

                                <div className="space-y-2 text-gray-300 text-sm">
                                    <p>✔ 운영 자금</p>
                                    <p>✔ AI 감시</p>
                                    <p>✔ 출금 제한</p>
                                </div>

                            </div>

                            <div className="bg-black border border-purple-500 rounded-2xl p-6">

                                <h3 className="text-xl font-bold text-purple-400 mb-4">
                                    락업 지갑 B
                                </h3>

                                <div className="text-4xl font-bold mb-4">
                                    10%
                                </div>

                                <div className="space-y-2 text-gray-300 text-sm">
                                    <p>✔ 장기 락업</p>
                                    <p>✔ 콜드월렛</p>
                                    <p>✔ 멀티시그</p>
                                </div>

                            </div>

                            <div className="bg-black border border-blue-500 rounded-2xl p-6">

                                <h3 className="text-xl font-bold text-blue-400 mb-4">
                                    글로벌 지갑 C
                                </h3>

                                <div className="text-4xl font-bold mb-4">
                                    10%
                                </div>

                                <div className="space-y-2 text-gray-300 text-sm">
                                    <p>✔ 글로벌 투자</p>
                                    <p>✔ 거래소 대응</p>
                                    <p>✔ 보안 승인</p>
                                </div>

                            </div>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-2xl font-bold">
                                입금
                            </button>

                            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-bold">
                                출금
                            </button>

                            <button className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-2xl font-bold">
                                스테이킹
                            </button>

                        </div>

                    </div>

                </div>

                {/* 실시간 상태 */}
                <div className="space-y-6">

                    <div className="bg-gray-900 border border-green-500 rounded-3xl p-6">

                        <h3 className="text-xl font-bold mb-4">
                            실시간 지갑 상태
                        </h3>

                        <div className="space-y-4 text-gray-300">

                            <div className="flex justify-between">
                                <span>총 보유량</span>
                                <span className="text-cyan-400 font-bold">
                                    30%
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>실시간 스테이킹</span>
                                <span className="text-green-400 font-bold">
                                    활성화
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>보안 상태</span>
                                <span className="text-yellow-400 font-bold">
                                    최고등급
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="bg-gray-900 border border-red-500 rounded-3xl p-6">

                        <h3 className="text-xl font-bold mb-4">
                            AI 보안 감시
                        </h3>

                        <div className="space-y-3 text-gray-300">

                            <p>✔ 실시간 이상 거래 탐지</p>
                            <p>✔ AI 자동 차단</p>
                            <p>✔ 다중 관리자 승인</p>
                            <p>✔ 긴급 잠금 시스템</p>
                            <p>✔ 글로벌 보안 분석</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CoinWalletSystem;