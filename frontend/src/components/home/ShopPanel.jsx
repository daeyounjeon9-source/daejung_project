import {
    ShoppingCart,
    Package,
    CreditCard,
    TrendingUp,
} from "lucide-react";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import NeonButton from "../common/NeonButton";

export default function ShopPanel() {
    const items = [
        {
            title: "오늘 주문",
            value: "1,248",
            icon: <Package size={22} />,
        },
        {
            title: "결제 완료",
            value: "98%",
            icon: <CreditCard size={22} />,
        },
        {
            title: "매출 증가",
            value: "+32%",
            icon: <TrendingUp size={22} />,
        },
    ];

    return (
        <GlassCard>
            <SectionTitle
                icon={<ShoppingCart />}
                title="SHOP 연결 패널"
                subtitle="AI SHOP SYSTEM"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="
              rounded-3xl
              border
              border-violet-400/10
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

                            <div className="text-violet-300">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
                <NeonButton className="bg-violet-500/80 hover:bg-violet-400">
                    SHOP 이동
                </NeonButton>

                <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                    주문 관리
                </button>
            </div>
        </GlassCard>
    );
}