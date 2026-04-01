export default function Problem() {
  const painPoints = [
    {
      title: "Trapped by your software's limits",
      description:
        "Your tools show you dashboards and reports — but only what they were designed to show. When you want to do more with your data, you hit a wall.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <path d="M4 12h24M12 12v16" />
          <circle cx="22" cy="22" r="3" />
          <path d="M24.5 24.5L28 28" />
        </svg>
      ),
    },
    {
      title: "Hours lost to manual work",
      description:
        "Your team spends hours on repetitive tasks — copying data between tools, building documents by hand, doing work that should be automated.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 8v8l5 5" />
        </svg>
      ),
    },
    {
      title: "Systems that don't talk to each other",
      description:
        "Your tools work fine on their own, but nothing connects. So your team becomes the glue — manually moving information from one place to another.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="16" r="4" />
          <circle cx="24" cy="8" r="4" />
          <circle cx="24" cy="24" r="4" />
          <path d="M12 14l8-4M12 18l8 4" strokeDasharray="3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="problem" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)] mb-3">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
            Sound familiar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-[var(--color-offwhite)] border border-transparent hover:border-[var(--color-gold)]/20 transition-all duration-300"
            >
              <div className="text-[var(--color-gold)] mb-5">{point.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-black)] mb-3">
                {point.title}
              </h3>
              <p className="text-[var(--color-gray)] leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
