import { useState } from "react";

export default function Sidebar() {
    const [active, setActive] = useState("dashboard");

    const menu = [
        { key: "dashboard", label: "Dashboard" },
        { key: "analytics", label: "Analytics" },
        { key: "stream", label: "Stream" },
        { key: "commerce", label: "Commerce" },
        { key: "security", label: "Security" },
        { key: "settings", label: "Settings" },
    ];

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-40 flex flex-col">

            <div className="px-6 py-8 flex items-center justify-center text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                DAEJUNG NEXT
            </div>

            <nav className="mt-10 flex-1">
                {menu.map((item) => (
                    <button
                        key={item.key}
                        onClick={() => setActive(item.key)}
                        className={`w-full text-left px-6 py-4 mb-2 rounded-xl font-bold text-gray-300 hover:text-cyan-400 transition-all ${active === item.key ? "bg-white/5 text-cyan-400" : ""
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="px-6 py-4 text-gray-500 text-sm border-t border-white/10">
                © 2026 DAEJUNG NEXT
            </div>
        </aside>
    );
}