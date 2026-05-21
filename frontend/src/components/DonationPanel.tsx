const donations = [
    {
        user: "GlobalFan",
        amount: "$5,000",
        message: "DAEJUNG NEXT 응원합니다!",
    },
    {
        user: "VIP Member",
        amount: "$2,500",
        message: "프리미엄 서비스 최고입니다.",
    },
    {
        user: "Next Creator",
        amount: "$1,200",
        message: "글로벌 성공 기대합니다.",
    },
];

export default function DonationPanel() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="xl:col-span-2 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-4xl font-black">
                            실시간 후원 시스템
                        </h2>

                        <p className="text-gray-400 mt-3 text-lg">
                            글로벌 후원 · 코인 · 멤버십 통합 시스템
                        </p>
                    </div>

                    <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-bold">
                        후원하기
                    </button>
                </div>

                {/* DONATION LIST */}
                <div className="space-y-5">
                    {donations.map((item) => (
                        <div
                            key={item.user}
                            className="rounded-3xl border border-white/10 bg-black/20 p-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center text-2xl">
                                            💎
                                        </div>

                                        <div>
                                            <div className="font-black text-xl">
                                                {item.user}
                                            </div>

                                            <div className="text-gray-400 text-sm mt-1">
                                                VIP SUPPORTER
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 text-gray-300">
                                        "{item.message}"
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="text-cyan-400 text-4xl font-black">
                                        {item.amount}
                                    </div>

                                    <div className="text-gray-400 mt-2">
                                        실시간 후원 완료
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8">
                {/* TOP */}
                <div>
                    <div className="text-cyan-300 text-sm tracking-[3px]">
                        MONTHLY SUPPORT
                    </div>

                    <div className="mt-4 text-6xl font-black">
                        $482K
                    </div>

                    <div className="mt-3 text-gray-300">
                        이번달 누적 후원 금액
                    </div>
                </div>

                {/* PROGRESS */}
                <div className="mt-10">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300">
                            글로벌 목표 달성률
                        </span>

                        <span className="text-cyan-400 font-bold">
                            84%
                        </span>
                    </div>

                    <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[84%] h-full bg-cyan-400 rounded-full" />
                    </div>
                </div>

                {/* INFO */}
                <div className="mt-10 space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <div className="text-gray-400 text-sm">
                            오늘 신규 멤버십
                        </div>

                        <div className="text-3xl font-black mt-2">
                            +1,248
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <div className="text-gray-400 text-sm">
                            AI 자동 후원 처리
                        </div>

                        <div className="text-3xl font-black mt-2">
                            99.9%
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <button className="w-full mt-10 py-4 rounded-2xl bg-white text-black hover:scale-[1.02] transition-all font-black text-lg">
                    VIP 멤버십 가입
                </button>
            </div>
        </div>
    );
}