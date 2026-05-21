const stats = [
    {
        title: "실시간 접속자",
        value: "128,450",
        sub: "+12% 증가",
        color: "text-cyan-400",
    },
    {
        title: "오늘 후원 금액",
        value: "$84,200",
        sub: "실시간 업데이트",
        color: "text-green-400",
    },
    {
        title: "활성 스트리머",
        value: "2,341",
        sub: "현재 방송중",
        color: "text-pink-400",
    },
    {
        title: "AI 자동 처리",
        value: "98.9%",
        sub: "시스템 안정성",
        color: "text-yellow-400",
    },
];

export default function StatsGrid() {
    return (
        <div>
            {/* TITLE */}
            <div className="mb-8">
                <h2 className="text-4xl font-black">
                    플랫폼 실시간 현황
                </h2>

                <p className="text-gray-400 mt-3 text-lg">
                    DAEJUNG NEXT 통합 데이터 모니터링
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:scale-[1.02] transition-all duration-300"
                    >
                        {/* GLOW */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />

                        {/* CONTENT */}
                        <div className="relative z-10">
                            <div className="text-gray-400 text-sm">
                                {item.title}
                            </div>

                            <div
                                className={`text-5xl font-black mt-4 ${item.color}`}
                            >
                                {item.value}
                            </div>

                            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm text-white">
                                {item.sub}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}