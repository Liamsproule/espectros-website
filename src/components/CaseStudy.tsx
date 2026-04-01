export default function CaseStudy() {
  const results = [
    { stat: "5-7 hrs", label: "saved per week, per designer" },
    { stat: "10+ years", label: "of data unlocked" },
    { stat: "First", label: "automated marketing campaigns" },
  ];

  return (
    <section id="casestudy" className="py-24 px-6 bg-[var(--color-black)] relative overflow-hidden">
      {/* Subtle gold accent glow */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(197, 165, 90, 0.08)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)] mb-3">
            Case Study
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Proven in the Real World
          </h2>
        </div>

        {/* Case study card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12">
          <p className="text-[var(--color-gold)] font-medium text-sm mb-2">
            Client
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            A greenhouse and landscape company in Alberta
          </h3>

          <div className="mb-8">
            <p className="text-white/70 leading-relaxed mb-6">
              A multi-department operation running on disconnected systems. Years
              of sales and customer data locked inside their POS with no way to
              use it beyond basic dashboards. Designers spending hours every week
              manually creating client documents. Marketing campaigns built on
              guesswork instead of real customer data.
            </p>

            <p className="text-[var(--color-gold)] font-medium text-sm mb-3">
              What we built
            </p>
            <ul className="space-y-3">
              {[
                "Connected their POS data to a centralized system their whole team could use",
                "Automated document generation that saved designers 5-7 hours per week",
                "Linked real customer data to their email marketing platform — enabling targeted campaigns for the first time",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-[var(--color-gold)] mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {results.map((result, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                  {result.stat}
                </p>
                <p className="text-white/50 text-sm mt-1">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
