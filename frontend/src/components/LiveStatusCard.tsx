const channels = [
    {
        name: "DAEJUNG LIVE",
        viewers: "24.5K",
        status: "LIVE",
        color: "bg-red-500",
    },
    {
        name: "NEXT MUSIC",
        viewers: "18.2K",
        status: "LIVE",
        color: "bg-pink-500",
    },
    {
        name: "GLOBAL SHOP",
        viewers: "9.1K",
        status: "ONLINE",
        color: "bg-cyan-500",
    },
];

export default function LiveStatusCard() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* MAIN LIVE */}
            <div className="xl:col-span-2 rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                {/* VIDEO AREA */}
                <div className="relative h-[420px] bg-gradient-to-br from-[#111827] to-[#020617]">
                    {/* GLOW */}
                    <div className="absolute inset-0 bg-cyan-500/10" />

                    {/* LIVE BADGE */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-bold">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        LIVE NOW
                    </div>

                    {/* VIEWERS */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur text-white">
                        👁 128,450 Watching
                    </div>

                    {/* CENTER */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-xl">
                            <div className="w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center text-4xl text-black">
                                ▶
                            </div>
                        </div>

                        <h2 className="mt-8 text-4xl font-black">
                            DAEJUNG NEXT LIVE
                        </h2>

                        <p className="mt-4 text-gray-300 text-lg">
                            글로벌 통합 라이브 스트리밍 시스템
                        </p>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <div className="text-2xl font-black">
                                실시간 글로벌 방송 운영중
                            </div>

                            <div className="text-gray-400 mt-2">
                                AI 자동 송출 · 실시간 후원 · 초저지연 스트리밍
                            </div>
                        </div>

                        <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-bold">
                            방송 입장
                        </button>
                    </div>
                </div>
            </div>

            {/* SIDE PANEL */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-black">
                        채널 상태
                    </h3>

                    <div className="text-green-400 text-sm">
                        ● ONLINE
                    </div>
                </div>

                {/* CHANNEL LIST */}
                <div className="space-y-4">
                    {channels.map((channel) => (
                        <div
                            key={channel.name}
                            className="rounded-2xl border border-white/10 bg-black/20 p-5"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-lg">
                                        {channel.name}
                                    </div>

                                    <div className="text-gray-400 text-sm mt-1">
                                        {channel.viewers} viewers
                                    </div>
                                </div>

                                <div
                                    className={`px-3 py-1 rounded-full text-sm font-bold text-white ${channel.color}`}
                                >
                                    {channel.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SYSTEM */}
                <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6">
                    <div className="text-cyan-300 text-sm">
                        SYSTEM STATUS
                    </div>

                    <div className="mt-3 text-3xl font-black">
                        99.98%
                    </div>

                    <div className="text-gray-300 mt-2">
                        서버 안정성 유지중
                    </div>
                </div>
            </div>
        </div>
    );
}