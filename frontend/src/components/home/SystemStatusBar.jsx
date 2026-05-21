export default function SystemStatusBar() {
    return (
        <section className="relative z-10 max-w-7xl mx-auto px-6 -mt-10 mb-20">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition-all shadow-[0_0_30px_rgba(34,211,238,0.08)]">

                    <div className="text-gray-500 mb-2">
                        ACTIVE AI
                    </div>

                    <div className="text-5xl font-black text-cyan-400">
                        284
                    </div>

                </div>

                <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-400/40 transition-all shadow-[0_0_30px_rgba(168,85,247,0.08)]">

                    <div className="text-gray-500 mb-2">
                        LIVE USERS
                    </div>

                    <div className="text-5xl font-black text-purple-400">
                        842K
                    </div>

                </div>

                <div className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-green-400/40 transition-all shadow-[0_0_30px_rgba(74,222,128,0.08)]">

                    <div className="text-gray-500 mb-2">
                        SECURITY
                    </div>

                    <div className="text-5xl font-black text-green-400">
                        SAFE
                    </div>

                </div>

                <div className="rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-pink-400/40 transition-all shadow-[0_0_30px_rgba(236,72,153,0.08)]">

                    <div className="text-gray-500 mb-2">
                        NETWORK
                    </div>

                    <div className="text-5xl font-black text-pink-400">
                        LIVE
                    </div>

                </div>

            </div>

        </section>
    );
}