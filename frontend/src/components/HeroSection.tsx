export default function HeroSection() {
    return (
        <section className="relative py-32 text-center overflow-hidden">

            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/20 blur-[200px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                <div className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-10">
                    QUANTUM AI PLATFORM
                </div>

                <h1 className="text-7xl md:text-9xl font-black leading-none mb-10">

                    <span className="text-white">
                        DAEJUNG
                    </span>

                    <br />

                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        NEXT
                    </span>

                </h1>

                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
                    초지능 AI · 글로벌 스트리밍 · 보안 · 데이터 · 커머스를
                    하나로 통합한 차세대 메가 플랫폼
                </p>

                <div className="flex flex-wrap justify-center gap-6">

                    <button className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-105 transition-all">
                        플랫폼 시작
                    </button>

                    <button className="px-10 py-4 rounded-2xl border border-white/20 text-white font-black text-lg hover:border-cyan-400 transition-all">
                        라이브 데모
                    </button>

                </div>

            </div>

        </section>
    );
}