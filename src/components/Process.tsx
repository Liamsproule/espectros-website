export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your business",
      description:
        "Start with a quick conversation. We learn about your operations, your tools, and where things feel stuck.",
    },
    {
      number: "02",
      title: "We find the opportunities",
      description:
        "We dig into your systems and workflows to identify where automation and smarter data use will have the biggest impact.",
    },
    {
      number: "03",
      title: "We build it",
      description:
        "We design and build the solution — integrated with your existing tools, tailored to how your team actually works.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)] mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-[var(--color-gray-light)]" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Number circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[var(--color-gold)] text-[var(--color-gold)] font-bold text-lg mb-6 bg-white relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-black)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-gray)] leading-relaxed text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
