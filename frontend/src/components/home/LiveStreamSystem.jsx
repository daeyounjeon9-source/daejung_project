import React from "react";

const LiveStreamSystem = () => {
    return (
        <div className="text-white">

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                    실시간 라이브 방송 시스템
                </h2>

                <div className="flex items-center gap-3">

                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

                    <span className="text-red-400 font-bold">
                        LIVE ON AIR
                    </span>

                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* 방송화면 */}
                <div className="xl:col-span-2">

                    <div className="bg-gray-900 border border-red-500 rounded-3xl overflow-hidden">

                        <div className="aspect-video bg-black flex items-center justify-center">

                            <div className="text-center">

                                <div className="text-6xl mb-4">
                                    ▶
                                </div>

                                <h3 className="text-2xl font-bold mb-2">
                                    DNX LIVE COMMERCE
                                </h3>

                                <p className="text-gray-400">
                                    글로벌 AI 라이브 방송 시스템
                                </p>

                            </div>

                        </div>

                        <div className="p-6 border-t border-gray-800">

                            <div className="flex flex-wrap gap-4">

                                <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl font-bold">
                                    방송 시작
                                </button>

                                <button className="bg-gray-800 hover:bg-gray-700 transition px-6 py-3 rounded-2xl font-bold">
                                    방송 종료
                                </button>

                                <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-2xl font-bold">
                                    예약 방송
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 방송정보 */}
                <div className="space-y-6">

                    <div className="bg-gray-900 border border-cyan-500 rounded-3xl p-6">

                        <h3 className="text-xl font-bold mb-4">
                            실시간 방송 상태
                        </h3>

                        <div className="space-y-4 text-gray-300">

                            <div className="flex justify-between">
                                <span>현재 시청자</span>
                                <span className="text-cyan-400 font-bold">
                                    12,845
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>실시간 주문</span>
                                <span className="text-green-400 font-bold">
                                    3,241
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>글로벌 접속</span>
                                <span className="text-yellow-400 font-bold">
                                    48개국
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="bg-gray-900 border border-purple-500 rounded-3xl p-6">

                        <h3 className="text-xl font-bold mb-4">
                            AI 방송 기능
                        </h3>

                        <div className="space-y-3 text-gray-300">

                            <p>✔ AI 자동 방송 분석</p>
                            <p>✔ 글로벌 다국어 자막</p>
                            <p>✔ 실시간 상품 추천</p>
                            <p>✔ 자동 광고 송출</p>
                            <p>✔ 글로벌 트래픽 분석</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LiveStreamSystem;