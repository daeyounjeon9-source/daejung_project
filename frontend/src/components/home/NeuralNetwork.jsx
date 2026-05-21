const nodes = [
    "AI NODE",
    "STREAM NODE",
    "DATA NODE",
    "SECURITY NODE",
    "CLOUD NODE",
    "QUANTUM NODE",
];

export default function NeuralNetwork() {
    return (
        <section className="w-full py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-14">
                    <h2 className="text-5xl font-black text-white mb-4">
                        NEURAL NETWORK
                    </h2>

                    <p className="text-gray-400 text-lg">
                        미래형 AI 네트워크 연결 시스템
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {nodes.map((node, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10 hover:scale-105 transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />

                            <div className="w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center mb-8">
                                <div className="w-5 h-5 rounded-full bg-cyan-400 animate-pulse" />
                            </div>

                            <h3 className="text-3xl font-black text-white mb-6">
                                {node}
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                실시간 글로벌 데이터 및 AI 처리 연결 상태 유지 중
                            </p>

                            <div className="mt-10 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                                <span className="text-green-400 font-semibold">
                                    CONNECTED
                                </span>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}