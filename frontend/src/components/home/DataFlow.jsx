const flows = [
    "AI DATA STREAM",
    "CLOUD SECURITY",
    "LIVE NETWORK",
    "GLOBAL NODE",
    "QUANTUM LINK",
];

export default function DataFlow() {
    return (
        <section className="w-full py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-5xl font-black text-white mb-4">
                        REALTIME DATA FLOW
                    </h2>

                    <p className="text-gray-400 text-lg">
                        실시간 미래형 데이터 흐름 분석 시스템
                    </p>
                </div>

                <div className="space-y-6">

                    {flows.map((flow, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-2xl rounded-[28px] p-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                <div>
                                    <div className="text-cyan-400 text-sm mb-3">
                                        FLOW 0{index + 1}
                                    </div>

                                    <h3 className="text-3xl font-black text-white">
                                        {flow}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">

                                    <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />

                                    <span className="text-green-400 font-bold text-lg">
                                        ACTIVE
                                    </span>

                                </div>

                            </div>

                            <div className="relative z-10 mt-8 h-2 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}