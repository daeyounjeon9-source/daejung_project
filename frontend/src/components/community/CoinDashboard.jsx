import React, { useState, useEffect } from 'react';

const CoinDashboard = () => {
    const [balance, setBalance] = useState(300000000); // 초기 30% DNX
    const [dailyReward, setDailyReward] = useState(0);

    // 가상 자동 누적 함수
    useEffect(() => {
        const interval = setInterval(() => {
            const reward = Math.floor(Math.random() * 500); // 활동 기반 가상 보상
            setDailyReward(reward);
            setBalance(prev => prev + reward);
        }, 60000); // 1분마다 자동 누적
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-8 bg-white/5 border border-cyan-500/30 rounded-3xl my-8">
            <h2 className="text-cyan-400 text-2xl font-bold mb-4">DNX COIN DASHBOARD</h2>
            <p className="text-white text-xl mb-2">현재 잔액: <span className="font-black">{balance} DNX</span></p>
            <p className="text-slate-300 text-lg">최근 누적 보상: {dailyReward} DNX</p>
        </section>
    );
};

export default CoinDashboard;