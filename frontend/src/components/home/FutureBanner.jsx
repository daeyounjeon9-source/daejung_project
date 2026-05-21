export default function FutureBanner() {
    return (
        <section className="w-full py-24 px-6 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="border border-cyan-400/20 bg-white/5 backdrop-blur-2xl rounded-[40px] p-10 md:p-20 text-center">

                    <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-8">
                        DAEJUNG NEXT FUTURE SYSTEM
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
                        미래형 통합 플랫폼의
                        <br />
                        새로운 기준
                    </h2>

                    <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                        AI · 스트리밍 · 쇼핑 · 데이터 · 보안 · 클라우드가
                        하나로 연결되는 차세대 디지털 생태계
                    </p>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

                        <button className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition-all duration-300">
                            플랫폼 시작
                        </button>

                        <button className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300">
                            시스템 보기
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}