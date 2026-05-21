export default function FloatingSystem() {
    return (
        <>
            {/* TOP LEFT */}
            <div
                className="
          fixed
          top-[-120px]
          left-[-120px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          pointer-events-none
          z-0
        "
            />

            {/* BOTTOM RIGHT */}
            <div
                className="
          fixed
          bottom-[-120px]
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
          pointer-events-none
          z-0
        "
            />

            {/* CENTER */}
            <div
                className="
          fixed
          top-[35%]
          left-[45%]
          w-[220px]
          h-[220px]
          rounded-full
          bg-blue-500/5
          blur-[100px]
          pointer-events-none
          z-0
        "
            />
        </>
    );
}