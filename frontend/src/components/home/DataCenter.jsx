export default function DataCenter() {
    return (
        <section className="w-full py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-cyan-400 text-2xl font-bold mb-4">
                            AI 서버
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            실시간 인공지능 연산 및 데이터 처리 시스템
                        </p>
                    </div>

                    <div className="bg-white/5 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-purple-400 text-2xl font-bold mb-4">
                            클라우드
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            글로벌 분산형 클라우드 인프라 운영
                        </p>
                    </div>

                    <div className="bg-white/5 border border-pink-400/20 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-pink-400 text-2xl font-bold mb-4">
                            보안 시스템
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            차세대 보안 프로토콜 및 실시간 감시 시스템
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}