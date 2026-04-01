export default function WhyUs() {
  const differentiators = [
    {
      contrast: "Most consultants want to sell you new software.",
      us: "We build on what you already use.",
    },
    {
      contrast: "Most agencies hand you off to a junior team after the sale.",
      us: "With us, the people you talk to are the people who build it.",
    },
    {
      contrast: "Most projects drag on for months.",
      us: "We move fast — you see real results in weeks, not quarters.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[var(--color-offwhite)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)] mb-3">
            The Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
            Why Espectros
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border border-[var(--color-gray-light)]"
            >
              <p className="text-[var(--color-gray)] text-sm line-through decoration-[var(--color-gray-light)] mb-2">
                {item.contrast}
              </p>
              <p className="text-[var(--color-black)] font-semibold text-lg">
                {item.us}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
