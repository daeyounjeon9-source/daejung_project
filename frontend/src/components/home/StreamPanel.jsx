import {
    Radio,
    Users,
    Video,
    Signal,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import NeonButton from "../common/NeonButton";

export default function StreamPanel() {
    const streams = [
        {
            title: "현재 시청자",
            value: "24,892",
            icon: <Users size={22} />,
        },
        {
            title: "LIVE 채널",
            value: "18",
            icon: <Video size={22} />,
        },
        {
            title: "스트림 상태",
            value: "ONLINE",
            icon: <Signal size={22} />,
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                icon={<Radio />}
                title="STREAMING 연결 패널"
                subtitle="LIVE STREAM SYSTEM"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {streams.map((item, index) => (
                    <div
                        key={index}
                        className="
              rounded-3xl
              border
              border-emerald-400/10
              bg-[#081120]
              p-5
            "
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">
                                    {item.title}
                                </p>

                                <h2 className="mt-3 text-2xl font-black text-white">
                                    {item.value}
                                </h2>
                            </div>

                            <div className="text-emerald-300">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
                <NeonButton className="bg-emerald-500/80 hover:bg-emerald-400">
                    STREAM 입장
                </NeonButton>

                <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                    방송 관리
                </button>
            </div>
        </GlassCard>
    );
}