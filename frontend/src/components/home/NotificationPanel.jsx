import {
    Bell,
    ShieldAlert,
    ShoppingCart,
    Radio,
    Cpu,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function NotificationPanel() {
    const notifications = [
        {
            title: "AI 분석 완료",
            message: "실시간 데이터 분석 성공",
            icon: <Cpu size={18} />,
            color: "text-cyan-300",
        },
        {
            title: "SHOP 신규 주문",
            message: "새 주문이 접수되었습니다",
            icon: <ShoppingCart size={18} />,
            color: "text-violet-300",
        },
        {
            title: "LIVE 스트림 연결",
            message: "스트리밍 서버 활성화",
            icon: <Radio size={18} />,
            color: "text-emerald-300",
        },
        {
            title: "보안 알림",
            message: "시스템 보안 상태 정상",
            icon: <ShieldAlert size={18} />,
            color: "text-blue-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                icon={<Bell />}
                title="실시간 알림 센터"
                subtitle="LIVE NOTIFICATION SYSTEM"
            />

            <div className="space-y-4">
                {notifications.map((item, index) => (
                    <div
                        key={index}
                        className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/5
              bg-[#081120]
              px-5
              py-4
              hover:border-cyan-400/20
              transition-all
            "
                    >
                        <div
                            className={`
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-2xl
                bg-white/5
                ${item.color}
              `}
                        >
                            {item.icon}
                        </div>

                        <div className="flex-1">
                            <p className="font-semibold text-white">
                                {item.title}
                            </p>

                            <p className="text-sm text-gray-400 mt-1">
                                {item.message}
                            </p>
                        </div>

                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}