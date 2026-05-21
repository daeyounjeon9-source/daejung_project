export default function OrbitSystem() {
    return (
        <>
            {/* ORBIT 1 */}
            <div
                className="
          fixed
          top-[12%]
          right-[8%]
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-cyan-400/10
          animate-spin
          pointer-events-none
          z-0
        "
                style={{
                    animationDuration: "18s",
                }}
            >
                <div
                    className="
            absolute
            top-[-6px]
            left-1/2
            -translate-x-1/2
            w-3
            h-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_#22d3ee]
          "
                />
            </div>

            {/* ORBIT 2 */}
            <div
                className="
          fixed
          bottom-[10%]
          left-[8%]
          w-[260px]
          h-[260px]
          rounded-full
          border
          border-violet-400/10
          animate-spin
          pointer-events-none
          z-0
        "
                style={{
                    animationDuration: "28s",
                    animationDirection: "reverse",
                }}
            >
                <div
                    className="
            absolute
            bottom-[-6px]
            left-1/2
            -translate-x-1/2
            w-3
            h-3
            rounded-full
            bg-violet-400
            shadow-[0_0_20px_#a855f7]
          "
                />
            </div>

            {/* ORBIT 3 */}
            <div
                className="
          fixed
          top-[45%]
          right-[25%]
          w-[140px]
          h-[140px]
          rounded-full
          border
          border-blue-400/10
          animate-spin
          pointer-events-none
          z-0
        "
                style={{
                    animationDuration: "12s",
                }}
            >
                <div
                    className="
            absolute
            top-1/2
            right-[-6px]
            -translate-y-1/2
            w-2
            h-2
            rounded-full
            bg-blue-400
            shadow-[0_0_20px_#60a5fa]
          "
                />
            </div>
        </>
    );
}