const cards = [
    {
        title: "AI NETWORK",
        desc: "차세대 인공지능 자동 분석 시스템",
        color: "from-cyan-500/20 to-cyan-300/10",
    },
    {
        title: "STREAM ENGINE",
        desc: "초고속 실시간 스트리밍 인프라",
        color: "from-purple-500/20 to-pink-300/10",
    },
    {
        title: "SECURITY CORE",
        desc: "실시간 글로벌 보안 감시 프로토콜",
        color: "from-pink-500/20 to-red-300/10",
    },
];

export default function TechCards() {
    return (
        <section className="w-full py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-14">
                    <h2 className="text-5xl font-black text-white mb-4">
                        CORE TECHNOLOGY
                    </h2>

                    <p className="text-gray-400 text-lg">
                        DAEJUNG NEXT 핵심 미래 기술 시스템
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${card.color} border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300`}
                        >
                            <div className="text-cyan-400 text-sm mb-6">
                                SYSTEM 0{index + 1}
                            </div>

                            <h3 className="text-3xl font-black text-white mb-6">
                                {card.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                {card.desc}
                            </p>

                            <div className="mt-10 h-1 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-[85%] rounded-full bg-cyan-400" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}