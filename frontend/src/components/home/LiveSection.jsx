import React from 'react';

const liveCards = [
    {
        title: '프리미엄 건강식품 LIVE',
        viewers: '12,840명 시청중',
        reward: '+120 DNX',
    },
    {
        title: 'AI 패션 글로벌 방송',
        viewers: '8,240명 시청중',
        reward: '+80 DNX',
    },
    {
        title: '스포츠 한정 굿즈 LIVE',
        viewers: '5,120명 시청중',
        reward: '+45 DNX',
    },
];

const LiveSection = () => {
    return (
        <section className="relative py-28 px-10 bg-black overflow-hidden">

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500 blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="mb-16">

                    <p className="text-cyan-400 tracking-[6px] text-sm mb-4">
                        LIVE COMMERCE SYSTEM
                    </p>

                    <h2 className="text-6xl font-black leading-tight">

                        실시간 글로벌
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                            LIVE 방송 시스템
                        </span>

                    </h2>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {liveCards.map((card, index) => (

                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500"
                        >

                            <div className="relative h-[260px] bg-gradient-to-br from-slate-900 to-cyan-950 flex items-center justify-center">

                                <div className="absolute top-5 left-5 flex items-center gap-2 bg-red-500/20 border border-red-500 px-4 py-2 rounded-full">

                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />

                                    <span className="text-red-300 text-sm">
                                        LIVE ON AIR
                                    </span>

                                </div>

                                <h3 className="text-3xl font-black text-center px-8">
                                    {card.title}
                                </h3>

                            </div>

                            <div className="p-8">

                                <p className="text-slate-300 text-lg mb-4">
                                    {card.viewers}
                                </p>

                                <div className="flex items-center justify-between">

                                    <span className="text-emerald-400 font-bold text-xl">
                                        보상 {card.reward}
                                    </span>

                                    <button className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-bold text-black">
                                        입장하기
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default LiveSection;