export default function LiveDashboard() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black">실시간 데이터</h2>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="space-y-6">

        <div>
          <div className="flex justify-between mb-2">
            <span>AI 엔진</span>
            <span>96%</span>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[96%] bg-cyan-400 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>데이터 분석</span>
            <span>91%</span>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[91%] bg-purple-500 rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
}