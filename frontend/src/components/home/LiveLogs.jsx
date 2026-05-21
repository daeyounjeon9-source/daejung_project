import { Activity } from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function LiveLogs() {
    const logs = [
        "[20:31] USER LOGIN SUCCESS",
        "[20:32] STREAM CONNECTED",
        "[20:33] AI ANALYSIS COMPLETE",
        "[20:34] SHOP PAYMENT SUCCESS",
        "[20:35] ADMIN ACCESS GRANTED",
        "[20:36] SECURITY VERIFIED",
        "[20:37] DATA FLOW ACTIVE",
    ];

    return (
        <GlassCard className="h-full">
            <SectionTitle
                icon={<Activity />}
                title="실시간 활동 로그"
                subtitle="LIVE SYSTEM STATUS"
            />

            <div className="space-y-4">
                {logs.map((log, index) => (
                    <div
                        key={index}
                        className="
              rounded-2xl
              border
              border-white/5
              bg-[#081120]
              px-4
              py-4
              font-mono
              text-sm
              text-green-400
              hover:border-cyan-400/20
              transition-all
            "
                    >
                        {log}
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}