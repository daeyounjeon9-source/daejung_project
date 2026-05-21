import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function ServerHealth() {
    const servers = [
        {
            name: "AI CORE SERVER",
            value: 98,
            color: "bg-cyan-400",
        },
        {
            name: "STREAM SERVER",
            value: 92,
            color: "bg-emerald-400",
        },
        {
            name: "SHOP SYSTEM",
            value: 95,
            color: "bg-violet-400",
        },
        {
            name: "DATABASE",
            value: 89,
            color: "bg-blue-400",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                title="서버 상태 모니터"
                subtitle="LIVE SERVER HEALTH"
            />

            <div className="space-y-5">
                {servers.map((server, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-white">
                                {server.name}
                            </p>

                            <span className="text-sm text-gray-400">
                                {server.value}%
                            </span>
                        </div>

                        <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                            <div
                                className={`h-full rounded-full ${server.color}`}
                                style={{
                                    width: `${server.value}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}