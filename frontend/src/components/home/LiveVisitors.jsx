import {
    Users,
    Globe,
    Smartphone,
    Monitor,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function LiveVisitors() {
    const visitors = [
        {
            title: "전체 방문자",
            value: "128,492",
            icon: <Users size={22} />,
            color: "text-cyan-300",
        },
        {
            title: "글로벌 접속",
            value: "42개국",
            icon: <Globe size={22} />,
            color: "text-blue-300",
        },
        {
            title: "모바일 접속",
            value: "68%",
            icon: <Smartphone size={22} />,
            color: "text-violet-300",
        },
        {
            title: "PC 접속",
            value: "32%",
            icon: <Monitor size={22} />,
            color: "text-emerald-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                title="실시간 방문자 분석"
                subtitle="LIVE VISITOR ANALYTICS"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {visitors.map((item, index) => (
                    <div
                        key={index}
                        className="
              rounded-3xl
              border
              border-white/5
              bg-[#081120]
              p-5
              hover:border-cyan-400/20
              transition-all
            "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">
                                    {item.title}
                                </p>

                                <h2 className="mt-3 text-3xl font-black text-white">
                                    {item.value}
                                </h2>
                            </div>

                            <div className={item.color}>
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}