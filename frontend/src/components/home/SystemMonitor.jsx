export default function SystemMonitor() {
    const systems = [
        {
            title: "AI 엔진",
            status: "ONLINE",
            color: "text-cyan-400",
        },
        {
            title: "스트리밍 서버",
            status: "RUNNING",
            color: "text-green-400",
        },
        {
            title: "보안 프로토콜",
            status: "SECURE",
            color: "text-pink-400",
        },
        {
            title: "클라우드 동기화",
            status: "ACTIVE",
            color: "text-purple-400",
        },
    ];

    return (
        <section className="w-full py-16 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-white mb-3">
                        실시간 시스템 모니터
                    </h2>

                    <p className="text-gray-400">
                        미래형 통합 플랫폼 상태 실시간 분석
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {systems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            </div>

                            <div className={`text-3xl font-bold ${item.color}`}>
                                {item.status}
                            </div>

                            <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-[92%] bg-cyan-400 rounded-full" />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}