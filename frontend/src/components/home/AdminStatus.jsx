import {
    ShieldCheck,
    Database,
    Server,
    Cpu,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import StatusBadge from "../common/StatusBadge";

export default function AdminStatus() {
    const systems = [
        {
            title: "보안 시스템",
            status: "SECURE",
            icon: <ShieldCheck size={22} />,
            color: "text-cyan-300",
        },
        {
            title: "데이터 서버",
            status: "NORMAL",
            icon: <Database size={22} />,
            color: "text-blue-300",
        },
        {
            title: "AI 프로세스",
            status: "ACTIVE",
            icon: <Cpu size={22} />,
            color: "text-violet-300",
        },
        {
            title: "메인 서버",
            status: "ONLINE",
            icon: <Server size={22} />,
            color: "text-emerald-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                icon={<ShieldCheck />}
                title="관리자 현황판"
                subtitle="ADMIN CONTROL STATUS"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {systems.map((item, index) => (
                    <div
                        key={index}
                        className="
              rounded-3xl
              border
              border-white/5
              bg-[#081120]
              p-5
            "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <div
                                    className={`flex items-center gap-3 ${item.color}`}
                                >
                                    {item.icon}

                                    <span className="font-bold">
                                        {item.title}
                                    </span>
                                </div>

                                <div className="mt-5">
                                    <StatusBadge
                                        text={item.status}
                                        color="green"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}