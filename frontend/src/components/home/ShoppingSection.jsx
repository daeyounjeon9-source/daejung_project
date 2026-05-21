export default function ShoppingSection() {
    return (
        <section className="py-24 px-6 bg-black">
            <h2 className="text-4xl font-bold mb-10">
                NEXT SHOPPING
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-zinc-900 rounded-3xl p-6 h-72">
                    Product 01
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 h-72">
                    Product 02
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 h-72">
                    Product 03
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 h-72">
                    Product 04
                </div>
            </div>
        </section>
    );
}