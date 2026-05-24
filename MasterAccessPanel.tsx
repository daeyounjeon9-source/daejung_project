export default function MasterAccessPanel() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-950 border border-cyan-500/30 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-widest text-cyan-400">
            DAEJUNG NEXT
          </h1>
          <p className="text-zinc-400 mt-2">MASTER ACCESS SYSTEM</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-zinc-400">관리자 ID</label>
            <input
              defaultValue="livon700220"
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">비밀번호</label>
            <input
              type="password"
              defaultValue="jdy0220!"
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">OTP 인증번호</label>
            <input
              defaultValue="1448927"
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-500">접근 등급</span>
              <span className="text-red-400 font-bold">OMEGA_BLACK</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">시스템 상태</span>
              <span className="text-green-400 font-bold">ACTIVE</span>
            </div>
          </div>

          <button className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-black font-bold tracking-widest shadow-lg shadow-cyan-500/30">
            ACCESS GRANTED
          </button>
        </div>

        <div className="mt-8 text-center text-xs text-zinc-600">
          DAEJUNG NEXT SECURITY CORE
        </div>
      </div>
    </div>
  );
}
