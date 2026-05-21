const systems = [
    {
        name: "Streaming Server",
        value: "99.98%",
        color: "bg-green-400",
    },
    {
        name: "AI Monitoring",
        value: "ACTIVE",
        color: "bg-cyan-400",
    },
    {
        name: "Security Shield",
        value: "SAFE",
        color: "bg-purple-400",
    },
    {
        name: "Database Cluster",
        value: "ONLINE",
        color: "bg-pink-400",
    },
];

export default function SystemMonitor() {
    return (
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
            {/* HEADER */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">
                <div>
                    <h2 className="text-4xl font-black">
                        시스템 모니터링
                    </h2>

                    <p className="mt-3 text-lg text-gray-400">
                        AI 기반 실시간 플랫폼 상태 분석
                    </p>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-green-400/20 bg-green-400/10">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-green-300 font-bold">
                        ALL SYSTEM ONLINE
                    </span>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {systems.map((system) => (
                    <div
                        key={system.name}
                        className="rounded-3xl border border-white/10 bg-black/20 p-6"
                    >
                        {/* TOP */}
                        <div className="flex items-center justify-between">
                            <div className="text-gray-400 text-sm">
                                {system.name}
                            </div>

                            <div
                                className={`w-3 h-3 rounded-full ${system.color}`}
                            />
                        </div>

                        {/* VALUE */}
                        <div className="mt-6 text-4xl font-black">
                            {system.value}
                        </div>

                        {/* BAR */}
                        <div className="mt-6 w-full h-3 rounded-full bg-white/10 overflow-hidden">
                            <div className="w-[92%] h-full bg-cyan-400 rounded-full" />
                        </div>

                        {/* STATUS */}
                        <div className="mt-4 text-sm text-gray-400">
                            실시간 자동 감시중
                        </div>
                    </div>
                ))}
            </div>

            {/* LOWER PANEL */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
                {/* LEFT */}
                <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-black/20 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <div className="text-2xl font-black">
                                AI 실시간 처리 현황
                            </div>

                            <div className="text-gray-400 mt-2">
                                글로벌 서버 자동 운영 시스템
                            </div>
                        </div>

                        <div className="text-cyan-400 text-5xl font-black">
                            98.9%
                        </div>
                    </div>

                    {/* GRAPH */}
                    <div className="flex items-end gap-3 h-[220px]">
                        <div className="w-full h-[35%] rounded-t-2xl bg-cyan-500/70" />
                        <div className="w-full h-[55%] rounded-t-2xl bg-cyan-500/70" />
                        <div className="w-full h-[72%] rounded-t-2xl bg-cyan-500/70" />
                        <div className="w-full h-[48%] rounded-t-2xl bg-cyan-500/70" />
                        <div className="w-full h-[90%] rounded-t-2xl bg-cyan-400" />
                        <div className="w-full h-[76%] rounded-t-2xl bg-cyan-500/70" />
                        <div className="w-full h-[96%] rounded-t-2xl bg-cyan-300" />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8">
                    <div className="text-cyan-300 text-sm tracking-[3px]">
                        SECURITY STATUS
                    </div>

                    <div className="mt-5 text-6xl font-black">
                        SAFE
                    </div>

                    <div className="mt-4 text-gray-300 leading-relaxed">
                        3중 보안 인증 및 AI 자동 위험 감지 시스템이
                        실시간으로 플랫폼을 보호중입니다.
                    </div>

                    {/* ITEMS */}
                    <div className="mt-10 space-y-4">
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
                            <span className="text-gray-300">
                                Firewall
                            </span>

                            <span className="text-green-400 font-bold">
                                ACTIVE
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
                            <span className="text-gray-300">
                                AI Detection
                            </span>

                            <span className="text-cyan-400 font-bold">
                                ENABLED
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
                            <span className="text-gray-300">
                                Backup System
                            </span>

                            <span className="text-purple-400 font-bold">
                                READY
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}