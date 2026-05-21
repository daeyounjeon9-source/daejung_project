export default function SecurityMatrix() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(168,85,247,0.08)]">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
      </div>

      <div className="relative z-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-black">
            SECURITY MATRIX
          </h2>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />

            <span className="text-purple-300 text-sm font-bold">
              PROTECTED
            </span>

          </div>

        </div>

        <div className="space-y-5">

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-purple-400/20 transition-all flex justify-between items-center">

            <span className="text-gray-300">
              양자 암호화
            </span>

            <span className="text-green-400 font-black">
              ACTIVE
            </span>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-cyan-400/20 transition-all flex justify-between items-center">

            <span className="text-gray-300">
              클라우드 방어
            </span>

            <span className="text-cyan-400 font-black">
              ONLINE
            </span>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-pink-400/20 transition-all flex justify-between items-center">

            <span className="text-gray-300">
              AI 감시 시스템
            </span>

            <span className="text-pink-400 font-black">
              LIVE
            </span>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-blue-400/20 transition-all flex justify-between items-center">

            <span className="text-gray-300">
              네트워크 보호
            </span>

            <span className="text-blue-400 font-black">
              SAFE
            </span>

          </div>

          <div className="rounded-2xl bg-black/30 p-5 border border-white/5 hover:border-green-400/20 transition-all flex justify-between items-center">

            <span className="text-gray-300">
              침입 탐지 AI
            </span>

            <span className="text-green-400 font-black">
              ENABLED
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}