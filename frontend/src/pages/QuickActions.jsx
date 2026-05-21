import {
    Rocket,
    ShoppingBag,
    Radio,
    Shield,
    Cpu,
    Settings,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function QuickActions() {
    const actions = [
        {
            title: "AI 실행",
            icon: <Cpu size={22} />,
            color: "text-cyan-300",
        },
        {
            title: "SHOP 이동",
            icon: <ShoppingBag size={22} />,
            color: "text-violet-300",
        },
        {
            title: "STREAM 시작",
            icon: <Radio size={22} />,
            color: "text-emerald-300",
        },
        {
            title: "보안 관리",
            icon: <Shield size={22} />,
            color: "text-blue-300",
        },
        {
            title: "시스템 설정",
            icon: <Settings size={22} />,
            color: "text-orange-300",
        },
        {
            title: "빠른 실행",
            icon: <Rocket size={22} />,
            color: "text-pink-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                title="빠른 실행 패널"
                subtitle="QUICK ACTION SYSTEM"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                {actions.map((item, index) => (
                    <button
                        key={index}
                        className="
              group
              rounded-3xl
              border
              border-white/10
              bg-[#081120]
              p-5
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-400/20
              hover:bg-white/5
            "
                    >
                        <div
                            className={`
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-2xl
                bg-white/5
                mx-auto
                ${item.color}
              `}
                        >
                            {item.icon}
                        </div>

                        <p className="mt-4 text-sm font-semibold text-white">
                            {item.title}
                        </p>
                    </button>
                ))}
            </div>
        </GlassCard>
    );
}