type Props = {
    title: string;
    value: string;
    status?: string;
};

export default function DashboardCard({
    title,
    value,
    status,
}: Props) {
    return (
        <div className="rounded-3xl border border-cyan-500/20 bg-[#06111f] p-6 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-zinc-400 text-sm">{title}</h3>

                {status && (
                    <span className="text-cyan-400 text-xs">
                        {status}
                    </span>
                )}
            </div>

            <div className="text-4xl font-black text-white">
                {value}
            </div>
        </div>
    );
}