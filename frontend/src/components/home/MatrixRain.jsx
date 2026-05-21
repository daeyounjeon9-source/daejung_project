export default function MatrixRain() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">

            {[...Array(30)].map((_, index) => (
                <div
                    key={index}
                    className="absolute top-[-100px] text-cyan-400 text-xs animate-pulse"
                    style={{
                        left: `${index * 4}%`,
                        animationDuration: `${4 + index % 5}s`,
                    }}
                >
                    0101010101
                    <br />
                    AI SYSTEM
                    <br />
                    DAEJUNG
                    <br />
                    NEXT
                </div>
            ))}

        </div>
    );
}