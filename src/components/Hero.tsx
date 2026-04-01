export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-black)] overflow-hidden">
      {/* Subtle gold gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px]" style={{ backgroundColor: "rgba(197, 165, 90, 0.12)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          We modernize how your business operates.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Espectros unlocks trapped data, eliminates manual busywork, and builds
          smarter systems — so your team can focus on what actually matters.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="btn-magnetic inline-block px-8 py-4 rounded-full bg-[var(--color-gold)] text-white font-medium text-lg hover:bg-[var(--color-gold-light)]"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
