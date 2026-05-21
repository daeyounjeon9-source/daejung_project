import {
    User,
    ShoppingCart,
    Radio,
    ShieldCheck,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function ActivityFeed() {
    const activities = [
        {
            title: "신규 사용자 로그인",
            time: "방금 전",
            icon: <User size={18} />,
            color: "text-cyan-300",
        },
        {
            title: "SHOP 주문 완료",
            time: "1분 전",
            icon: <ShoppingCart size={18} />,
            color: "text-violet-300",
        },
        {
            title: "LIVE 스트림 시작",
            time: "3분 전",
            icon: <Radio size={18} />,
            color: "text-emerald-300",
        },
        {
            title: "보안 시스템 검사 완료",
            time: "5분 전",
            icon: <ShieldCheck size={18} />,
            color: "text-blue-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                title="실시간 활동 피드"
                subtitle="LIVE ACTIVITY FEED"
            />

            <div className="space-y-4">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/5
              bg-[#081120]
              px-5
              py-4
            "
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/5
                  ${item.color}
                `}
                            >
                                {item.icon}
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    {item.title}
                                </p>

                                <p className="text-sm text-gray-400 mt-1">
                                    시스템 이벤트 감지됨
                                </p>
                            </div>
                        </div>

                        <span className="text-sm text-gray-500">
                            {item.time}
                        </span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}