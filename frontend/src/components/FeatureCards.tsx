const features = [
    {
        title: "AI 통합 운영",
        desc: "자동 모니터링과 실시간 분석으로 플랫폼 전체를 AI가 관리합니다.",
        icon: "🤖",
    },
    {
        title: "라이브 스트리밍",
        desc: "초고속 저지연 라이브 방송 시스템과 글로벌 송출 지원.",
        icon: "📡",
    },
    {
        title: "프리미엄 쇼핑",
        desc: "스트리머 · 브랜드 · 글로벌 상품 통합 커머스 지원.",
        icon: "🛒",
    },
    {
        title: "후원 시스템",
        desc: "실시간 후원 · 포인트 · 코인 · 멤버십 시스템 제공.",
        icon: "💎",
    },
    {
        title: "보안 시스템",
        desc: "3중 보안 인증 및 AI 위험 감지 시스템 적용.",
        icon: "🛡️",
    },
    {
        title: "실시간 분석",
        desc: "트래픽 · 매출 · 시청자 데이터를 실시간 시각화.",
        icon: "📊",
    },
];

export default function FeatureCards() {
    return (
        <div>
            {/* TITLE */}
            <div className="mb-10">
                <h2 className="text-4xl font-black">
                    핵심 플랫폼 기능
                </h2>

                <p className="mt-3 text-lg text-gray-400">
                    DAEJUNG NEXT 차세대 통합 시스템
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300"
                    >
                        {/* BACK LIGHT */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

                        {/* CONTENT */}
                        <div className="relative z-10">
                            <div className="text-6xl mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-black mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>

                            <button className="mt-8 px-5 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/20 hover:bg-cyan-500/30 transition-all">
                                자세히 보기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}