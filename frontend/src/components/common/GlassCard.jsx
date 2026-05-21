export default function GlassCard({
    children,
    className = "",
}) {
    return (
        <div
            className={`
        rounded-[28px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_30px_rgba(34,211,238,0.08)]
        p-6
        ${className}
      `}
        >
            {children}
        </div>
    );
}