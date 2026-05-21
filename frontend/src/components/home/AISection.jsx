export default function AISection() {
    return (
        <section className="py-24 px-6 bg-zinc-950">
            <h2 className="text-4xl font-bold mb-10">
                AI SYSTEM
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 rounded-3xl p-8">
                    AI Streaming
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8">
                    AI Commerce
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8">
                    AI Assistant
                </div>
            </div>
        </section>
    );
}