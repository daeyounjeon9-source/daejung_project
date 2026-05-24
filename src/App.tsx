import React from "react";
import "./index.css";

type Product = {
  name: string;
  price: string;
  tag: string;
  live: string;
};

const products: Product[] = [
  { name: "AI 스마트 생활 패키지", price: "39,900원", tag: "오늘특가", live: "LIVE 01" },
  { name: "프리미엄 건강 케어 세트", price: "59,000원", tag: "인기", live: "LIVE 02" },
  { name: "홈 라이프 주방 풀세트", price: "79,800원", tag: "한정", live: "LIVE 03" },
  { name: "대정넥스트 멤버십 박스", price: "29,900원", tag: "신규", live: "LIVE 04" },
];

const stats = [
  ["실시간 시청자", "128,420"],
  ["오늘 주문", "8,912"],
  ["라이브 채널", "12"],
  ["AI 응대율", "98%"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050814] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-bold tracking-[0.35em] text-emerald-300">AI LIVE COMMERCE</p>
            <h1 className="text-2xl font-black tracking-tight">DAEJUNG NEXT</h1>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <span>홈</span>
            <span>라이브</span>
            <span>오늘특가</span>
            <span>AI 쇼호스트</span>
            <span>관리자</span>
          </nav>
          <div className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-bold text-emerald-300">
            시스템 온라인
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-emerald-500/20 p-8 shadow-2xl">
            <div className="absolute right-8 top-8 rounded-2xl bg-red-500 px-4 py-2 text-sm font-black">LIVE ON AIR</div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200">
              지금 방송 중 · AI 쇼호스트 추천
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              보고, 묻고, 바로 사는 미래형 홈쇼핑 화면
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              라이브 방송, 상품 카드, AI 상담, 코인 리워드, 관리자 상태를 하나의 화면에서 연결하는 대정넥스트 메인입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-emerald-400 px-6 py-4 font-black text-black shadow-lg shadow-emerald-400/20">
                라이브 구매하기
              </button>
              <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white">
                AI에게 상품 묻기
              </button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-2 text-2xl font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-black">AI 쇼호스트</h3>
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-200">응대중</span>
            </div>
            <div className="grid place-items-center rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-8 text-center">
              <div className="text-7xl">🤖</div>
              <p className="mt-4 text-lg font-black">대정 AI 안내원</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                고객 질문, 상품 비교, 구매 안내, 쿠폰 안내를 실시간으로 처리합니다.
              </p>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p className="rounded-2xl bg-white/10 p-4">“오늘 특가 상품을 추천해드릴까요?”</p>
              <p className="rounded-2xl bg-emerald-400/15 p-4 text-emerald-200">“구매 버튼과 혜택을 바로 연결했습니다.”</p>
            </div>
          </aside>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-emerald-300">TODAY LIVE DEAL</p>
              <h3 className="text-3xl font-black">실시간 홈쇼핑 상품</h3>
            </div>
            <button className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-300">전체보기</button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item, idx) => (
              <article key={item.name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06]">
                <div className="relative grid h-44 place-items-center bg-gradient-to-br from-slate-800 to-slate-950">
                  <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-black">{item.live}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-black">{item.tag}</span>
                  <div className="text-6xl">{["📦", "💎", "🍳", "🎁"][idx]}</div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-black">{item.name}</h4>
                  <p className="mt-2 text-2xl font-black text-emerald-300">{item.price}</p>
                  <button className="mt-5 w-full rounded-2xl bg-white px-5 py-3 font-black text-black">
                    바로구매
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-black">실시간 채팅</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p className="rounded-2xl bg-black/25 p-3">고객A: 배송 언제 되나요?</p>
              <p className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-200">AI: 오늘 주문 시 내일 출고 예정입니다.</p>
              <p className="rounded-2xl bg-black/25 p-3">고객B: 쿠폰 적용되나요?</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-black">코인 리워드</h3>
            <p className="mt-4 text-4xl font-black text-cyan-300">+320 LVN</p>
            <p className="mt-3 text-slate-400">시청, 구매, 리뷰 활동을 리워드로 연결합니다.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-xl font-black">관리자 상태</h3>
            <p className="mt-4 text-4xl font-black text-emerald-300">98%</p>
            <p className="mt-3 text-slate-400">방송, 상품, 주문, AI 응대 시스템 정상 작동중입니다.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
