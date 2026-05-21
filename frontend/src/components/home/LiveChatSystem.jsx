import React from "react";

const LiveChatSystem = () => {
    return (
        <div className="text-white">

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                    실시간 라이브 채팅
                </h2>

                <div className="flex items-center gap-2">

                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                    <span className="text-green-400 font-bold">
                        CHAT ONLINE
                    </span>

                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* 채팅창 */}
                <div className="xl:col-span-2">

                    <div className="bg-gray-900 border border-green-500 rounded-3xl h-[500px] flex flex-col">

                        <div className="flex-1 overflow-y-auto p-6 space-y-4">

                            <div className="bg-black rounded-2xl p-4">
                                <span className="text-cyan-400 font-bold">
                                    글로벌유저01
                                </span>

                                <p className="text-gray-300 mt-2">
                                    지금 구매 가능한가요?
                                </p>
                            </div>

                            <div className="bg-black rounded-2xl p-4">
                                <span className="text-pink-400 font-bold">
                                    DNX VIP
                                </span>

                                <p className="text-gray-300 mt-2">
                                    스테이킹 보상 실시간 지급되나요?
                                </p>
                            </div>

                            <div className="bg-black rounded-2xl p-4">
                                <span className="text-yellow-400 font-bold">
                                    AI 운영센터
                                </span>

                                <p className="text-gray-300 mt-2">
                                    글로벌 자동 번역 활성화 완료
                                </p>
                            </div>

                        </div>

                        <div className="border-t border-gray-800 p-4 flex gap-4">

                            <input
                                type="text"
                                placeholder="메시지를 입력하세요..."
                                className="flex-1 bg-black border border-gray-700 rounded-2xl px-4 py-3 outline-none"
                            />

                            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-bold">
                                전송
                            </button>

                        </div>

                    </div>

                </div>

                {/* 채팅 분석 */}
                <div className="space-y-6">

                    <div className="bg-gray-900 border border-cyan-500 rounded-3xl p-6">

                        <h3 className="text-xl font-bold mb-4">
                            실시간 채팅 분석
                        </h3>

                        <div className="space-y-4 text-gray-300">

                            <div className="flex justify-between">
                                <span>현재 채팅 수</span>
                                <span className="text-cyan-400 font-bold">
                                    8,412
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>AI 번역 언어</span>
                                <span className="text-green-400 font-bold">
                                    32개국
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>실시간 반응률</span>
                                <span className="text-yellow-400 font-bold">
                                    97%
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="bg-gray-900 border border-purple-500 rounded-3xl p-6">

                        <h3 className="text-xl font-bold mb-4">
                            AI 채팅 기능
                        </h3>

                        <div className="space-y-3 text-gray-300">

                            <p>✔ 글로벌 자동 번역</p>
                            <p>✔ 욕설 및 스팸 자동 차단</p>
                            <p>✔ AI 고객 응답</p>
                            <p>✔ 실시간 상품 추천</p>
                            <p>✔ 구매 유도 분석</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LiveChatSystem;