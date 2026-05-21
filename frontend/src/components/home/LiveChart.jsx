import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

const data = [
    { value: 20 },
    { value: 35 },
    { value: 28 },
    { value: 50 },
    { value: 42 },
    { value: 70 },
    { value: 65 },
    { value: 90 },
];

export default function LiveChart() {
    return (
        <GlassCard className="h-full">
            <SectionTitle
                title="실시간 분석 차트"
                subtitle="LIVE AI ANALYTICS"
            />

            <div className="h-[260px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#22d3ee"
                            strokeWidth={4}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </GlassCard>
    );
}