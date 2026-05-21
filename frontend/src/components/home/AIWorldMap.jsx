export default function AIWorldMap() {
    const locations = [
        "SEOUL",
        "TOKYO",
        "NEW YORK",
        "LONDON",
        "SINGAPORE",
        "DUBAI",
    ];

    return (
        <section className="w-full py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-5xl font-black text-white mb-4">
                        GLOBAL AI NETWORK
                    </h2>

                    <p className="text-gray-400 text-lg">
                        글로벌 미래형 서버 연결 상태
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10">

                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

                    <div className="relative z-10 min-h-[500px] flex items-center justify-center">

                        <div className="relative w-full h-full">

                            {locations.map((city, index) => (
                                <div
                                    key={index}
                                    className="absolute flex flex-col items-center"
                                    style={{
                                        top: `${15 + index * 12}%`,
                                        left: `${10 + index * 13}%`,
                                    }}
                                >
                                    <div className="w-5 h-5 rounded-full bg-cyan-400 animate-pulse mb-3" />

                                    <div className="px-4 py-2 rounded-xl border border-cyan-400/20 bg-black/40 text-cyan-400 text-sm font-bold">
                                        {city}
                                    </div>
                                </div>
                            ))}

                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 1000 500"
                            >
                                <line
                                    x1="120"
                                    y1="100"
                                    x2="300"
                                    y2="180"
                                    stroke="#22d3ee"
                                    strokeWidth="2"
                                />

                                <line
                                    x1="300"
                                    y1="180"
                                    x2="500"
                                    y2="220"
                                    stroke="#22d3ee"
                                    strokeWidth="2"
                                />

                                <line
                                    x1="500"
                                    y1="220"
                                    x2="700"
                                    y2="280"
                                    stroke="#22d3ee"
                                    strokeWidth="2"
                                />

                                <line
                                    x1="700"
                                    y1="280"
                                    x2="850"
                                    y2="340"
                                    stroke="#22d3ee"
                                    strokeWidth="2"
                                />
                            </svg>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}