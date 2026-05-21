export default function NeonButton({
    children,
    onClick,
    className = "",
}) {
    return (
        <button
            onClick={onClick}
            className={`
        px-6
        py-3
        rounded-2xl
        font-bold
        text-white
        bg-cyan-500/80
        border
        border-cyan-300/30
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-cyan-400
        hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
        active:scale-95
        ${className}
      `}
        >
            {children}
        </button>
    );
}