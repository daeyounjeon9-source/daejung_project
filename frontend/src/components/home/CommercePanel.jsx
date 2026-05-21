export default function CommercePanel() {
  return (
    <div className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-8">

      <h2 className="text-3xl font-black mb-8">
        커머스 엔진
      </h2>

      <div className="space-y-5">

        <div className="rounded-2xl bg-black/30 p-5 flex justify-between">
          <span>실시간 거래</span>
          <span className="text-green-400 font-black">$2.8M</span>
        </div>

        <div className="rounded-2xl bg-black/30 p-5 flex justify-between">
          <span>활성 사용자</span>
          <span className="text-cyan-400 font-black">184K</span>
        </div>

        <div className="rounded-2xl bg-black/30 p-5 flex justify-between">
          <span>글로벌 주문</span>
          <span className="text-purple-400 font-black">24,811</span>
        </div>

      </div>

    </div>
  );
}