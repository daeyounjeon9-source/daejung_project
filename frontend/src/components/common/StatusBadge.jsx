export default function StatusBadge({
    text = "ONLINE",
    color = "green",
}) {
    const colors = {
        green: "bg-green-400",
        cyan: "bg-cyan-400",
        blue: "bg-blue-400",
        red: "bg-red-400",
        yellow: "bg-yellow-400",
    };

    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <div
                className={`h-3 w-3 rounded-full animate-pulse ${colors[color]}`}
            />

            <span className="text-sm font-semibold text-white">
                {text}
            </span>
        </div>
    );
}