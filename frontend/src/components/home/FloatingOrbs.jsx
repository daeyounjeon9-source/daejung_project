export default function FloatingOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

            <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

            <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />

        </div>
    );
}