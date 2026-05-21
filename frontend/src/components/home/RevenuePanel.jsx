import {
    DollarSign,
    TrendingUp,
    CreditCard,
    Wallet,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function RevenuePanel() {
    const revenue = [
        {
            title: "오늘 매출",
            value: "$128,420",
            icon: <DollarSign size={22} />,
            color: "text-cyan-300",
        },
        {
            title: "월 성장률",
            value: "+32%",
            icon: <TrendingUp size={22} />,
            color: "text-emerald-300",
        },
        {
            title: "결제 완료",
            value: "98.4%",
            icon: <CreditCard size={22} />,
            color: "text-violet-300",
        },
        {
            title: "보유 자산",
            value: "$4.2M",
            icon: <Wallet size={22} />,
            color: "text-orange-300",
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                title="수익 분석 패널"
                subtitle="LIVE REVENUE ANALYTICS"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {revenue.map((item, index) => (
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