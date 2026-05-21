export default function TopNavigation() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/10">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    DAEJUNG NEXT
                </div>

                <nav className="hidden md:flex gap-8 text-gray-300">

                    <button className="hover:text-cyan-400 transition-all">
                        AI
                    </button>

                    <button className="hover:text-cyan-400 transition-all">
                        STREAM
                    </button>

                    <button className="hover:text-cyan-400 transition-all">
                        SECURITY
                    </button>

                    <button className="hover:text-cyan-400 transition-all">
                        COMMERCE
                    </button>

                </nav>

                <button className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-black hover:scale-105 transition-all">
                    LOGIN
                </button>

            </div>

        </header>
    );
}