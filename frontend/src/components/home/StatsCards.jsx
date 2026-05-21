import {
    Users,
    BarChart3,
    Cpu,
    Server,
} from "lucide-react";

import GlassCard from "../common/GlassCard";

export default function StatsCards() {
    const stats = [
        {
            title: "실시간 접속",
            value: "18,245",
            icon: <Users size={30} />,
        },
        {
            title: "오늘 매출",
            value: "₩8,420,000",
            icon: <BarChart3 size={30} />,
        },
        {
            title: "AI 분석률",
            value: "99%",
            icon: <Cpu size={30} />,
        },
        {
            title: "서버 상태",
            value: "NORMAL",
            icon: <Server size={30} />,
        },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((item, index) => (
                <GlassCard
                    key={index}
                    className="hover:scale-[1.02] transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400">
                                {item.title}
                            </p>

                            <h2 className="mt-4 text-3xl font-black text-white">
                                {item.value}
                            </h2>
                        </div>

                        <div className="text-cyan-400">
                            {item.icon}
                        </div>
                    </div>
                </GlassCard>
            ))}
        </section>
    );
}