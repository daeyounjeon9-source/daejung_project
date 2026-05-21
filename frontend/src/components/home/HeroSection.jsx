export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black to-zinc-900">
      <h1 className="text-6xl font-bold mb-6">
        DAEJUNG NEXT
      </h1>

      <p className="text-zinc-400 text-xl max-w-2xl">
        Streaming · Shopping · Creator Economy · Coin System
      </p>

      <button className="mt-10 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition">
        ENTER PLATFORM
      </button>
    </section>
  );
}