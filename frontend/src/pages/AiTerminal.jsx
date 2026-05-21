import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function AiTerminal() {
    const logs = [
        "SYSTEM BOOT COMPLETE...",
        "AI ENGINE CONNECTED...",
        "DATABASE LINK SUCCESS...",
        "STREAM SERVER ACTIVE...",
        "SHOP API CONNECTED...",
        "SECURITY STATUS NORMAL...",
        "LIVE ANALYSIS RUNNING...",
        "ALL SYSTEM ONLINE...",
    ];

    return (
        <GlassCard className="overflow-hidden">
            <SectionTitle
                title="AI TERMINAL"
                subtitle="LIVE SYSTEM CONSOLE"
            />

            <div
                className="
          rounded-3xl
          border
          border-cyan-400/10
          bg-black/40
          p-5
          font-mono
          text-sm
          text-green-400
          space-y-3
        "
            >
                {logs.map((log, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3"
                    >
                        <span className="text-cyan-400">
                            &gt;
                        </span>

                        <span className="animate-pulse">
                            {log}
                        </span>
                    </div>
                ))}

                <div className="flex items-center gap-2 mt-4">
                    <span className="text-cyan-400">
                        &gt;
                    </span>

                    <div className="w-3 h-5 bg-green-400 animate-pulse" />
                </div>
            </div>
        </GlassCard>
    );
}