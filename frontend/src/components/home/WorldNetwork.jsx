export default function WorldNetwork() {
  return (
    <div className="rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-8">

      <h2 className="text-3xl font-black mb-8">
        글로벌 네트워크
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-black/30 p-5">
          <div className="text-gray-500 mb-2">SEOUL</div>
          <div className="text-cyan-400 text-3xl font-black">LIVE</div>
        </div>

        <div className="rounded-2xl bg-black/30 p-5">
          <div className="text-gray-500 mb-2">TOKYO</div>
          <div className="text-purple-400 text-3xl font-black">ONLINE</div>
        </div>

        <div className="rounded-2xl bg-black/30 p-5">
          <div className="text-gray-500 mb-2">NEW YORK</div>
          <div className="text-blue-400 text-3xl font-black">ACTIVE</div>
        </div>

        <div className="rounded-2xl bg-black/30 p-5">
          <div className="text-gray-500 mb-2">LONDON</div>
          <div className="text-green-400 text-3xl font-black">LIVE</div>
        </div>

      </div>

    </div>
  );
}