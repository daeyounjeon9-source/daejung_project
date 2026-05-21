export default function CyberGrid() {
    return (
        <div className="absolute inset-0 opacity-20 pointer-events-none">

            <div
                className="w-full h-full"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

        </div>
    );
}