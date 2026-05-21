export default function LiveAnalytics() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition-all duration-500">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
      </div>

      <div className="relative z-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-black">
            LIVE ANALYTICS
          </h2>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-cyan-300 text-sm">
              REALTIME
            </span>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-cyan-400/20 transition-all">

            <div className="text-gray-500 mb-2">
              ACTIVE USERS
            </div>

            <div className="text-4xl font-black text-cyan-400 mb-3">
              184K
            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[84%] bg-cyan-400 rounded-full animate-pulse" />
            </div>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-purple-400/20 transition-all">

            <div className="text-gray-500 mb-2">
              STREAMS
            </div>

            <div className="text-4xl font-black text-purple-400 mb-3">
              12.4K
            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[72%] bg-purple-400 rounded-full animate-pulse" />
            </div>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-green-400/20 transition-all">

            <div className="text-gray-500 mb-2">
              AI REQUESTS
            </div>

            <div className="text-4xl font-black text-green-400 mb-3">
              8.9M
            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[92%] bg-green-400 rounded-full animate-pulse" />
            </div>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-blue-400/20 transition-all">

            <div className="text-gray-500 mb-2">
              NETWORK
            </div>

            <div className="text-4xl font-black text-blue-400 mb-3">
              LIVE
            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[98%] bg-blue-400 rounded-full animate-pulse" />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}