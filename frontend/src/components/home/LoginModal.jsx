export default function LoginModal() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md">

            <div
                className="relative w-full max-w-md rounded-3xl border border-cyan-500/20 bg-black/80 p-8 shadow-[0_0_60px_rgba(34,211,238,0.15)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
                </div>

                <div className="relative z-10">

                    <div className="flex justify-between items-center mb-10">

                        <div>

                            <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                DAEJUNG NEXT
                            </h2>

                            <p className="text-gray-400 mt-2">
                                미래형 AI 플랫폼 로그인
                            </p>

                        </div>

                        <button className="text-gray-500 hover:text-white transition-all text-2xl">
                            ×
                        </button>

                    </div>

                    <div className="space-y-5">

                        <div>

                            <label className="block text-sm text-gray-400 mb-2">
                                EMAIL
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all"
                            />

                        </div>

                        <div>

                            <label className="block text-sm text-gray-400 mb-2">
                                PASSWORD
                            </label>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all"
                            />

                        </div>

                        <button className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all">

                            LOGIN

                        </button>

                        <button className="w-full py-4 rounded-2xl border border-white/10 text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all">

                            CREATE ACCOUNT

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}