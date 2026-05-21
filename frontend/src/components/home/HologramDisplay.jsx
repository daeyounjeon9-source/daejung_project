export default function HologramDisplay() {
    return (
        <section className="w-full py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10 md:p-20">

                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

                    <div className="relative z-10">

                        <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-8">
                            HOLOGRAM INTERFACE
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-10">
                            NEXT GENERATION
                            <br />
                            AI PLATFORM
                        </h2>

                        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-4xl">
                            미래형 인터페이스와 실시간 AI 데이터 시스템이
                            완전히 통합된 차세대 디지털 플랫폼 환경
                        </p>

                        <div className="mt-14 flex flex-wrap gap-6">

                            <button className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-black hover:scale-105 transition-all duration-300">
                                ENTER SYSTEM
                            </button>

                            <button className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-black hover:bg-white/10 transition-all duration-300">
                                VIEW NETWORK
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}