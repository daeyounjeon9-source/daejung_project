export default function FutureFooter() {
  return (
    <footer className="relative border-t border-white/10 py-14 mt-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div>

            <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              DAEJUNG NEXT
            </h3>

            <p className="text-gray-400 max-w-xl leading-relaxed">
              초지능 AI · 글로벌 스트리밍 · 보안 · 데이터 · 커머스를
              하나로 연결하는 미래형 메가 플랫폼
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">

            <div>

              <h4 className="text-white font-black mb-4">
                PLATFORM
              </h4>

              <div className="space-y-2">
                <div>AI SYSTEM</div>
                <div>STREAM</div>
                <div>COMMERCE</div>
              </div>

            </div>

            <div>

              <h4 className="text-white font-black mb-4">
                SECURITY
              </h4>

              <div className="space-y-2">
                <div>NETWORK</div>
                <div>MONITORING</div>
                <div>ENCRYPTION</div>
              </div>

            </div>

            <div>

              <h4 className="text-white font-black mb-4">
                GLOBAL
              </h4>

              <div className="space-y-2">
                <div>KOREA</div>
                <div>USA</div>
                <div>JAPAN</div>
              </div>

            </div>

            <div>

              <h4 className="text-white font-black mb-4">
                STATUS
              </h4>

              <div className="space-y-2">
                <div className="text-green-400">
                  ALL SYSTEM LIVE
                </div>

                <div className="text-cyan-400">
                  AI CONNECTED
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-gray-500">

          <div>
            © 2026 DAEJUNG NEXT. ALL RIGHTS RESERVED.
          </div>

          <div>
            FUTURE AI MEGA PLATFORM
          </div>

        </div>

      </div>

    </footer>
  );
}