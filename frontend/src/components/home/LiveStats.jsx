export default function LiveStats() {
    const stats = [
        {
            value: "12.8M",
            label: "실시간 사용자",
        },
        {
            value: "98.9%",
            label: "AI 정확도",
        },
        {
            value: "247TB",
            label: "클라우드 데이터",
        },
        {
            value: "24/7",
            label: "보안 감시",
        },
    ];

    return (
        <section className="w-full py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-3xl p-8 text-center backdrop-blur-xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-3">
                                {item.value}
                            </div>

                            <div className="text-gray-300 text-sm md:text-base">
                                {item.label}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}