import { useEffect, useState } from "react";

import {
    Users,
    Activity,
    ShoppingCart,
    Radio,
} from "lucide-react";

import GlassCard from "../common/GlassCard";

export default function RealtimeStats() {
    const [users, setUsers] = useState(18245);
    const [orders, setOrders] = useState(1248);
    const [streams, setStreams] = useState(18);
    const [aiRate, setAiRate] = useState(98);

    useEffect(() => {
        const timer = setInterval(() => {
            setUsers((prev) => prev + Math.floor(Math.random() * 5));

            setOrders((prev) => prev + Math.floor(Math.random() * 2));

            setStreams((prev) => {
                const random = Math.random() > 0.5 ? 1 : 0;
                return prev + random;
            });

            setAiRate((prev) => {
                const next = prev + Math.random() * 0.3;

                if (next > 99.9) {
                    return 98;
                }

                return Number(next.toFixed(1));
            });
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    const cards = [
        {
            title: "실시간 접속",
            value: users.toLocaleString(),
            icon: <Users size={28} />,
            color: "text-cyan-300",
        },
        {
            title: "실시간 주문",
            value: orders.toLocaleString(),
            icon: <ShoppingCart size={28} />,
            color: "text-violet-300",
        },
        {
            title: "LIVE 스트림",
            value: streams,
            icon: <Radio size={28} />,
            color: "text-emerald-300",
        },
        {
            title: "AI 분석률",
            value: `${aiRate}%`,
            icon: <Activity size={28} />,
            color: "text-blue-300",
        },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {cards.map((item, index) => (
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

                        <div className={item.color}>
                            {item.icon}
                        </div>
                    </div>
                </GlassCard>
            ))}
        </section>
    );
}