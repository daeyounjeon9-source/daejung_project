export default function CoinSection() {
    return (
        <section className="py-24 px-6 bg-zinc-950">
            <h2 className="text-4xl font-bold mb-10">
                NEXT COIN SYSTEM
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-4">
                        Creator Rewards
                    </h3>

                    <p className="text-zinc-400">
                        Real-time creator compensation system.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-4">
                        Viewer Coins
                    </h3>

                    <p className="text-zinc-400">
                        User activity based coin economy.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-4">
                        NFT Expansion
                    </h3>

                    <p className="text-zinc-400">
                        Future digital asset integration structure.
                    </p>
                </div>
            </div>
        </section>
    );
}