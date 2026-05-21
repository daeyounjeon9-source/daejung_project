export default function SecurityCenter() {
  return (
    <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-8">

      <h2 className="text-3xl font-black mb-8">
        보안 센터
      </h2>

      <div className="space-y-4">

        <div className="p-5 rounded-2xl bg-black/30 flex justify-between">
          <span>양자 암호화</span>
          <span className="text-green-400">정상</span>
        </div>

        <div className="p-5 rounded-2xl bg-black/30 flex justify-between">
          <span>클라우드 방어</span>
          <span className="text-cyan-400">활성</span>
        </div>

        <div className="p-5 rounded-2xl bg-black/30 flex justify-between">
          <span>AI 실시간 감시</span>
          <span className="text-purple-400">동작중</span>
        </div>

      </div>

    </div>
  );
}