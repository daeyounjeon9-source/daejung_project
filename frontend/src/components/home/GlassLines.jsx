export default function GlassLines() {
    return (
        <>
            {/* TOP LINE */}
            <div
                className="
          fixed
          top-[120px]
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent
          pointer-events-none
          z-0
        "
            />

            {/* MIDDLE LINE */}
            <div
                className="
          fixed
          top-1/2
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-400/10
          to-transparent
          pointer-events-none
          z-0
        "
            />

            {/* LEFT VERTICAL */}
            <div
                className="
          fixed
          top-0
          left-[90px]
          w-px
          h-full
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
          pointer-events-none
          z-0
        "
            />

            {/* RIGHT VERTICAL */}
            <div
                className="
          fixed
          top-0
          right-[90px]
          w-px
          h-full
          bg-gradient-to-b
          from-transparent
          via-violet-400/10
          to-transparent
          pointer-events-none
          z-0
        "
            />
        </>
    );
}