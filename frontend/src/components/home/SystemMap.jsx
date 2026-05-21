import {
    Cpu,
    Database,
    Shield,
    Radio,
    ShoppingBag,
    Cloud,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function SystemMap() {
    const systems = [
        {
            title: "AI CORE",
            icon: <Cpu size={22} />,
            color: "text-cyan-300",
        },
        {
            title: "DATABASE",
            icon: <Database size={22} />,
            color: "text-blue-300",
        },
        {
            title: "SECURITY",
            icon: <Shield size={22} />,
            color: "text-violet-300",
        },
        {
            title: "STREAM",
            icon: <Radio size={22} />,
            color: "text-emerald-300",
        },
        {
            title: "SHOP",
            icon: <ShoppingBag size={22} />,
            color: "text-orange-300",
        },
        {
            title: "CLOUD",
            icon: <Cloud size={22} />,
            color: "text-pink-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                title="플랫폼 시스템 맵"
                subtitle="DAEJUNG NEXT NETWORK"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {systems.map((item, index) => (
                    <div
                        key={index}
                        className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#081120]
              p-6
              hover:border-cyan-400/20
              transition-all
              duration-300
              hover:scale-[1.02]
            "
                    >
                        {/* GLOW */}
                        <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] bg-cyan-400/5 blur-[60px]" />

                        <div className="relative z-10">
                            <div
                                className={`
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  rounded-3xl
                  bg-white/5
                  ${item.color}
                `}
                            >
                                {item.icon}
                            </div>

                            <h3 className="mt-5 text-lg font-black text-white">
                                {item.title}
                            </h3>

                            <div className="mt-4 flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

                                <span className="text-sm text-green-400">
                                    CONNECTED
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}