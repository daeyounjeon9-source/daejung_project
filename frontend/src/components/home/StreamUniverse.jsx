export default function StreamUniverse() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-pink-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(236,72,153,0.08)]">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="relative z-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-black">
            STREAM UNIVERSE
          </h2>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />

            <span className="text-pink-300 text-sm font-bold">
              LIVE NOW
            </span>

          </div>

        </div>

        <div className="space-y-5">

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-pink-400/20 transition-all">

            <div className="flex justify-between items-center mb-3">

              <span className="text-gray-300">
                LIVE STREAM
              </span>

              <span className="text-pink-400 font-black">
                18,244
              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[86%] bg-pink-400 rounded-full animate-pulse" />

            </div>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-cyan-400/20 transition-all">

            <div className="flex justify-between items-center mb-3">

              <span className="text-gray-300">
                트래픽 처리량
              </span>

              <span className="text-cyan-400 font-black">
                12.8 TB/s
              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[92%] bg-cyan-400 rounded-full animate-pulse" />

            </div>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-purple-400/20 transition-all">

            <div className="flex justify-between items-center mb-3">

              <span className="text-gray-300">
                글로벌 채널
              </span>

              <span className="text-purple-400 font-black">
                842 ACTIVE
              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[78%] bg-purple-400 rounded-full animate-pulse" />

            </div>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-green-400/20 transition-all">

            <div className="flex justify-between items-center mb-3">

              <span className="text-gray-300">
                AI 추천 엔진
              </span>

              <span className="text-green-400 font-black">
                ENABLED
              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[96%] bg-green-400 rounded-full animate-pulse" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}