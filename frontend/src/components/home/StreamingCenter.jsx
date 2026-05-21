export default function StreamingCenter() {
  return (
    <div className="rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-8">

      <h2 className="text-3xl font-black mb-8">
        스트리밍 센터
      </h2>

      <div className="space-y-5">

        <div className="rounded-2xl bg-black/30 p-5">
          <div className="text-gray-400 mb-2">LIVE STREAM</div>
          <div className="text-2xl font-black text-pink-400">
            12,847 시청중
          </div>
        </div>

        <div className="rounded-2xl bg-black/30 p-5">
          <div className="text-gray-400 mb-2">트래픽 처리량</div>
          <div className="text-2xl font-black text-cyan-400">
            8.2 TB/s
          </div>
        </div>

      </div>

    </div>
  );
}