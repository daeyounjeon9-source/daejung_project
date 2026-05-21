export default function AICommandCenter() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
      </div>

      <div className="relative z-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-black">
            AI COMMAND
          </h2>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-green-400 text-sm font-bold">
              ONLINE
            </span>

          </div>

        </div>

        <div className="space-y-7">

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-gray-300">
                AI 분석률
              </span>

              <span className="text-cyan-400 font-black">
                98%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[98%] bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse" />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-gray-300">
                자동 학습
              </span>

              <span className="text-purple-400 font-black">
                92%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[92%] bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-pulse" />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-gray-300">
                네트워크 동기화
              </span>

              <span className="text-blue-400 font-black">
                88%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[88%] bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse" />

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-gray-300">
                양자 AI 연산
              </span>

              <span className="text-pink-400 font-black">
                99%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[99%] bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}