const controls = [
    "AI 자동 분석",
    "실시간 스트리밍",
    "클라우드 동기화",
    "보안 감시 활성화",
    "데이터 백업",
    "글로벌 서버 연결",
];

export default function AIControlPanel() {
    return (
        <section className="w-full py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="border border-cyan-400/20 bg-black/40 backdrop-blur-2xl rounded-[40px] overflow-hidden">

                    <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-black text-white">
                                AI CONTROL PANEL
                            </h2>

                            <p className="text-gray-400 mt-2">
                                통합 미래형 시스템 제어 센터
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400 font-semibold">
                                ONLINE
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">

                        {controls.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="text-white font-medium">
                                    {item}
                                </span>

                                <button className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition-all duration-300">
                                    활성화
                                </button>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}