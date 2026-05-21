export default function AnalyticsChart() {

    const bars = [45, 72, 58, 91, 66, 84, 97];

    return (
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
            </div>

            <div className="relative z-10">

                <div className="flex justify-between items-center mb-10">

                    <div>

                        <h2 className="text-3xl font-black">
                            AI ANALYTICS
                        </h2>

                        <p className="text-gray-500 mt-2">
                            실시간 AI 데이터 흐름
                        </p>

                    </div>

                    <div className="text-cyan-400 font-black text-xl">
                        LIVE
                    </div>

                </div>

                <div className="flex items-end justify-between h-64 gap-4">

                    {bars.map((height, index) => (
                        <div
                            key={index}
                            className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] animate-pulse"
                            style={{ height: `${height}%` }}
                        />
                    ))}

                </div>

                <div className="grid grid-cols-3 gap-4 mt-10">

                    <div className="rounded-2xl bg-black/30 p-4 border border-white/5">

                        <div className="text-gray-500 text-sm mb-2">
                            AI REQUEST
                        </div>

                        <div className="text-3xl font-black text-cyan-400">
                            8.4M
                        </div>

                    </div>

                    <div className="rounded-2xl bg-black/30 p-4 border border-white/5">

                        <div className="text-gray-500 text-sm mb-2">
                            ACTIVE NODE
                        </div>

                        <div className="text-3xl font-black text-purple-400">
                            842
                        </div>

                    </div>

                    <div className="rounded-2xl bg-black/30 p-4 border border-white/5">

                        <div className="text-gray-500 text-sm mb-2">
                            NETWORK
                        </div>

                        <div className="text-3xl font-black text-green-400">
                            SAFE
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}