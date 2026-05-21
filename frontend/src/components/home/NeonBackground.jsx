export default function NeonBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] animate-pulse" />

            <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] animate-pulse" />

            <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-pink-500/10 blur-[160px] animate-pulse" />

            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]" />

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

                <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-cyan-400 animate-ping" />

                <div className="absolute top-[30%] left-[70%] w-2 h-2 rounded-full bg-purple-400 animate-ping" />

                <div className="absolute top-[60%] left-[40%] w-2 h-2 rounded-full bg-pink-400 animate-ping" />

                <div className="absolute top-[80%] left-[80%] w-2 h-2 rounded-full bg-green-400 animate-ping" />

            </div>

        </div>
    );
}