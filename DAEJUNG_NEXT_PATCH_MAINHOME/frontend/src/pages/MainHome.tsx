import React from "react";
import {
  ShoppingCart,
  ShieldCheck,
  Radio,
  Coins,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const products = [
  {
    title: "Premium Smart Device",
    price: "₩1,290,000",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },
  {
    title: "Luxury Interior",
    price: "₩890,000",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    title: "Future Fashion",
    price: "₩590,000",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
  },
];

export default function MainHome() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative h-[720px]">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={36} className="text-cyan-400" />
              <h1 className="text-5xl md:text-7xl font-black tracking-widest">
                DAEJUNG NEXT
              </h1>
            </div>

            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
              차원이 다른 미래형 AI LIVE Commerce Platform
            </p>
          </div>

          <div className="flex gap-5 mt-8 flex-wrap">
            <button className="bg-cyan-500 hover:bg-cyan-400 transition-all px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl">
              LIVE SHOPPING
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all px-8 py-4 rounded-2xl text-xl font-bold">
              AI PLATFORM
            </button>
          </div>
        </div>
      </div>

      <section className="px-8 md:px-20 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black">TREND LIVE PRODUCTS</h2>

          <div className="flex items-center gap-2 text-cyan-400">
            <TrendingUp />
            REALTIME TREND
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <div className="text-cyan-400 text-3xl font-black mb-6">
                  {item.price}
                </div>

                <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                  <ShoppingCart />
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-20 bg-white/5">
        <h2 className="text-4xl font-black mb-12">
          NEXT GENERATION SYSTEM
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-black/40 rounded-3xl p-8 border border-white/10">
            <Radio className="text-cyan-400 mb-5" size={42} />
            <h3 className="text-2xl font-bold mb-4">LIVE STREAM</h3>
            <p className="text-gray-400">
              초고속 실시간 AI 라이브 커머스 시스템
            </p>
          </div>

          <div className="bg-black/40 rounded-3xl p-8 border border-white/10">
            <ShieldCheck className="text-cyan-400 mb-5" size={42} />
            <h3 className="text-2xl font-bold mb-4">TRIPLE SECURITY</h3>
            <p className="text-gray-400">
              3중 보안 기반 통합 보호 시스템
            </p>
          </div>

          <div className="bg-black/40 rounded-3xl p-8 border border-white/10">
            <Coins className="text-cyan-400 mb-5" size={42} />
            <h3 className="text-2xl font-bold mb-4">LIVON COIN</h3>
            <p className="text-gray-400">
              플랫폼 연동 Web3 생태계 운영
            </p>
          </div>

          <div className="bg-black/40 rounded-3xl p-8 border border-white/10">
            <Sparkles className="text-cyan-400 mb-5" size={42} />
            <h3 className="text-2xl font-bold mb-4">AI ENGINE</h3>
            <p className="text-gray-400">
              미래형 AI 자동 운영 분석 시스템
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
