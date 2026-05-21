export default function PremiumBanner() {
    return (
        <section className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#111827] to-purple-500/10 p-10 md:p-16">
            {/* GLOW */}
            <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
                {/* LEFT */}
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
                        PREMIUM MEMBERSHIP
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black leading-tight">
                        DAEJUNG NEXT
                        <span className="block text-cyan-400">
                            프리미엄 시스템
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                        고급 스트리밍 · VIP 멤버십 · 전용 혜택 · AI 자동 지원 ·
                        글로벌 프리미엄 서비스를 제공합니다.
                    </p>

                    {/* FEATURES */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <div className="text-cyan-400 text-xl font-bold">
                                4K ULTRA LIVE
                            </div>

                            <div className="text-gray-400 mt-2">
                                초고화질 스트리밍 지원
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <div className="text-purple-400 text-xl font-bold">
                                VIP BENEFIT
                            </div>

                            <div className="text-gray-400 mt-2">
                                멤버십 전용 특별 혜택
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <div className="text-pink-400 text-xl font-bold">
                                AI SUPPORT
                            </div>

                            <div className="text-gray-400 mt-2">
                                AI 자동 관리 시스템
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <div className="text-green-400 text-xl font-bold">
                                GLOBAL SERVICE
                            </div>

                            <div className="text-gray-400 mt-2">
                                글로벌 통합 플랫폼 운영
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full max-w-md">
                    <div className="rounded-[32px] border border-white/10 bg-black/30 backdrop-blur-xl p-8">
                        <div className="text-center">
                            <div className="text-cyan-400 text-sm tracking-[4px]">
                                PREMIUM PLAN
                            </div>

                            <div className="mt-4 text-6xl font-black">
                                $29
                            </div>

                            <div className="text-gray-400 mt-2">
                                / monthly
                            </div>
                        </div>

                        {/* LIST */}
                        <div className="mt-10 space-y-4">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <span className="text-gray-300">
                                    4K Streaming
                                </span>

                                <span className="text-cyan-400">
                                    포함
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <span className="text-gray-300">
                                    VIP Membership
                                </span>

                                <span className="text-cyan-400">
                                    포함
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <span className="text-gray-300">
                                    AI Support
                                </span>

                                <span className="text-cyan-400">
                                    포함
                                </span>
                            </div>

                            <div className="flex items-center justify-between pb-2">
                                <span className="text-gray-300">
                                    Global Access
                                </span>

                                <span className="text-cyan-400">
                                    포함
                                </span>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <button className="w-full mt-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-bold text-lg">
                            프리미엄 시작하기
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}