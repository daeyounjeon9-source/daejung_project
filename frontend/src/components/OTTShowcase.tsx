const contents = [
    {
        title: "DAEJUNG ORIGINAL",
        genre: "Premium Live",
        image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "NEXT DOCUMENTARY",
        genre: "Documentary",
        image:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "GLOBAL MUSIC",
        genre: "Music Live",
        image:
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function OTTShowcase() {
    return (
        <div>
            {/* TITLE */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                    <h2 className="text-4xl font-black">
                        OTT 콘텐츠 플랫폼
                    </h2>

                    <p className="mt-3 text-lg text-gray-400">
                        프리미엄 글로벌 스트리밍 콘텐츠
                    </p>
                </div>

                <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                    전체 콘텐츠 보기
                </button>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {contents.map((item) => (
                    <div
                        key={item.title}
                        className="group relative overflow-hidden rounded-[32px] border border-white/10 h-[460px]"
                    >
                        {/* IMAGE */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        {/* TOP BADGE */}
                        <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-red-500 text-sm font-bold">
                            NEW
                        </div>

                        {/* PLAY */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all">
                                <div className="text-4xl">
                                    ▶
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="text-cyan-400 text-sm mb-2">
                                {item.genre}
                            </div>

                            <h3 className="text-3xl font-black">
                                {item.title}
                            </h3>

                            <button className="mt-6 px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-bold">
                                시청하기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}