import React, { useState, useEffect } from 'react';

const WalletMiningSystem = () => {
    const [walletBalance, setWalletBalance] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const miningReward = Math.floor(Math.random() * 200); // 가상 채굴
            setWalletBalance(prev => prev + miningReward);
        }, 120000); // 2분마다 자동 채굴
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-8 bg-white/5 border border-green-500/30 rounded-3xl my-8">
            <h2 className="text-green-400 text-2xl font-bold mb-4">Wallet Mining System</h2>
            <p className="text-white text-xl mb-2">내 지갑 잔액: <span className="font-black">{walletBalance} DNX</span></p>
            <p className="text-slate-300 text-lg">활동 기반 자동 누적 채굴</p>
        </section>
    );
};

export default WalletMiningSystem;