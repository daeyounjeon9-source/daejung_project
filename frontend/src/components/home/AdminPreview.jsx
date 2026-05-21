export default function AdminPreview() {
    return (
        <section className="py-24 px-6 bg-black">
            <h2 className="text-4xl font-bold mb-10">
                ADMIN DASHBOARD
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-zinc-900 rounded-3xl p-6 h-48">
                    Users
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 h-48">
                    Revenue
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 h-48">
                    Live Status
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 h-48">
                    Coin Analytics
                </div>
            </div>
        </section>
    );
}