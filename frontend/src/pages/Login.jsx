export default function Login() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_45%)]" />

            <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-fuchsia-600/10 blur-3xl rounded-full" />

            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">

                <img
                    src="/logo.png"
                    alt="DAEJUNG NEXT"
                    className="h-14 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]"
                />

            </div>

            <div className="relative w-full max-w-sm mx-4 rounded-[32px] border border-cyan-500/10 bg-[#070b14]/92 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,255,255,0.08)] p-8">

                <div className="text-center mb-8 mt-8">

                    <h1 className="text-3xl font-bold text-white mb-3">
                        로그인
                    </h1>

                    <p className="text-zinc-500 text-sm leading-relaxed">
                        미래 통합 플랫폼에 접속하세요
                    </p>

                </div>

                <div className="space-y-4">

                    <input
                        type="email"
                        placeholder="이메일"
                        className="w-full h-14 rounded-2xl bg-black/40 border border-white/5 px-5 text-white placeholder:text-zinc-500 outline-none focus:border-cyan-400 transition-all"
                    />

                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="w-full h-14 rounded-2xl bg-black/40 border border-white/5 px-5 text-white placeholder:text-zinc-500 outline-none focus:border-fuchsia-400 transition-all"
                    />

                    <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-bold tracking-wide hover:scale-[1.01] transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.30)]">
                        로그인
                    </button>

                </div>

                <div className="flex justify-center gap-3 mt-6 text-sm text-zinc-600">

                    <span className="hover:text-cyan-400 cursor-pointer transition-all">
                        회원가입
                    </span>

                    <span>|</span>

                    <span className="hover:text-fuchsia-400 cursor-pointer transition-all">
                        비밀번호 찾기
                    </span>

                </div>

            </div>

        </div>
    )
}