import { useEffect, useState } from "react";

import GlassCard from "../common/GlassCard";

export default function RealtimeClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <GlassCard className="relative overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-cyan-500/10 blur-[80px]" />

            <div className="relative z-10">
                <p className="text-sm text-gray-400">
                    REALTIME SYSTEM CLOCK
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-black text-cyan-300">
                    {time.toLocaleTimeString()}
                </h2>

                <p className="mt-3 text-gray-300">
                    {time.toLocaleDateString()}
                </p>
            </div>
        </GlassCard>
    );
}