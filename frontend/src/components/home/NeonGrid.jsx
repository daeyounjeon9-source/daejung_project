export default function NeonGrid() {
    return (
        <>
            {/* LEFT GRID */}
            <div
                className="
          fixed
          left-0
          top-0
          w-[40vw]
          h-screen
          opacity-[0.03]
          pointer-events-none
          z-0
        "
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.4) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* RIGHT GRID */}
            <div
                className="
          fixed
          right-0
          top-0
          w-[40vw]
          h-screen
          opacity-[0.03]
          pointer-events-none
          z-0
        "
                style={{
                    backgroundImage: `
            linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* CENTER LINE */}
            <div
                className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          w-px
          h-screen
          bg-gradient-to-b
          from-cyan-400/0
          via-cyan-400/20
          to-cyan-400/0
          pointer-events-none
          z-0
        "
            />
        </>
    );
}