import React from "react";

import AiProducts from "./AiProducts";
import AiCenter from "./AiCenter";
import ControlCenter from "./ControlCenter";
import NotificationCenter from "./NotificationCenter";
import MobileDock from "./MobileDock";
import AutoMarketingEngine from "./AutoMarketingEngine";
import GrowthLoopSystem from "./GrowthLoopSystem";
import GlobalExposure from "./GlobalExposure";
import CoinSecuritySystem from "./CoinSecuritySystem";
import WithdrawalSecurity from "./WithdrawalSecurity";

const InfinityCore = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white p-10 pb-32">

            <h1 className="text-5xl font-bold mb-10">
                대정넥스트 인피니티 코어
            </h1>

            <div className="space-y-10">

                <section className="border border-cyan-500 rounded-3xl p-8">
                    <AiProducts />
                </section>

                <section className="border border-purple-500 rounded-3xl p-8">
                    <AiCenter />
                </section>

                <section className="border border-green-500 rounded-3xl p-8">
                    <ControlCenter />
                </section>

                <section className="border border-red-500 rounded-3xl p-8">
                    <NotificationCenter />
                </section>

                <section className="border border-yellow-500 rounded-3xl p-8">
                    <AutoMarketingEngine />
                </section>

                <section className="border border-pink-500 rounded-3xl p-8">
                    <GrowthLoopSystem />
                </section>

                <section className="border border-blue-500 rounded-3xl p-8">
                    <GlobalExposure />
                </section>

                <section className="border border-emerald-500 rounded-3xl p-8">
                    <CoinSecuritySystem />
                </section>

                <section className="border border-orange-500 rounded-3xl p-8">
                    <WithdrawalSecurity />
                </section>

            </div>

            <MobileDock />

        </div>
    );
};

export default InfinityCore;