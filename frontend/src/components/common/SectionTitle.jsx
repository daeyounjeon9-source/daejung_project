export default function SectionTitle({
    icon,
    title,
    subtitle,
}) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-3">
                <div className="text-cyan-400">
                    {icon}
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white">
                    {title}
                </h2>
            </div>

            {subtitle && (
                <p className="mt-2 text-gray-400 text-sm md:text-base">
                    {subtitle}
                </p>
            )}
        </div>
    );
}