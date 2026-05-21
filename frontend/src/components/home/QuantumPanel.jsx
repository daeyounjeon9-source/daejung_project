const systems = [
    {
        name: "QUANTUM AI",
        status: "ACTIVE",
    },
    {
        name: "GLOBAL LINK",
        status: "CONNECTED",
    },
    {
        name: "DATA FLOW",
        status: "STABLE",
    },
    {
        name: "NEURAL CORE",
        status: "RUNNING",
    },
];

export default function QuantumPanel() {
    return (
        <section className="w-full py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-5xl font-black text-white mb-4">
                        QUANTUM CONTROL
                    </h2>

                    <p className="text-gray-400 text-lg">
                        차세대 양자 기반 AI 시스템 운영 상태
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {systems.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-2xl rounded-[32px] p-8"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />

                            <div className="flex items-center justify-between mb-8">

                                <div>
                                    <div className="text-cyan-400 text-sm mb-2">
                                        SYSTEM 0{index + 1}
                                    </div>

                                    <h3 className="text-3xl font-black text-white">
                                        {item.name}
                                    </h3>
                                </div>

                                <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />

                            </div>

                            <div className="text-green-400 text-2xl font-bold mb-6">
                                {item.status}
                            </div>

                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-[90%] rounded-full bg-cyan-400" />
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}