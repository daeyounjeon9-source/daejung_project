const items = [
    {
        label: "AI NODE",
        value: "1,284",
    },
    {
        label: "GLOBAL SERVER",
        value: "84",
    },
    {
        label: "LIVE STREAM",
        value: "24/7",
    },
    {
        label: "SECURITY",
        value: "MAX",
    },
];

export default function NeonStatsBar() {
    return (
        <section className="w-full px-6 py-10 relative z-10">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-cyan-400 text-sm mb-3">
                                {item.label}
                            </div>

                            <div className="text-white text-3xl font-black">
                                {item.value}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}