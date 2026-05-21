export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">
                    DAEJUNG NEXT
                </h1>

                <nav className="hidden md:flex items-center gap-8 text-zinc-300">
                    <a href="#">Home</a>
                    <a href="#">Streaming</a>
                    <a href="#">Shopping</a>
                    <a href="#">Coin</a>
                    <a href="#">Admin</a>
                </nav>

                <button className="px-5 py-2 rounded-xl bg-white text-black font-bold">
                    Login
                </button>
            </div>
        </header>
    );
}