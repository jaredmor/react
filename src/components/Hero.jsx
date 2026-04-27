import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="hero-glow-top" />
      <div className="hero-glow-br" />
      <div className="hero-grid" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl text-center">
        <ScrollReveal delay={0} className="mb-6">
          <h1 className="text-4xl leading-tight sm:text-5xl sm:leading-tight md:text-7xl md:leading-none font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">
            This frontend is deployed on a blockchain network across 14 independent nodes — and you couldn&apos;t even tell.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mb-12">
          <p className="max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed text-zinc-400">
            A fully interactive, client-side application — fast, dynamic, and
            delivered instantly to users everywhere through advanced distributed
            infrastructure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <button
            onClick={scrollToGallery}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-zinc-900 shadow-lg shadow-white/10 transition-all duration-300 hover:bg-zinc-100 hover:shadow-white/20 active:scale-[0.97] cursor-pointer"
          >
            Explore
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </ScrollReveal>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: 'linear-gradient(to top, #050505, transparent)',
        }}
      />
    </section>
  );
}
