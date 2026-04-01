export default function Services() {
  const services = [
    {
      title: "Data Integration",
      description:
        "Connect your systems and centralize your data so it works together — not in silos.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 8h20M6 16h20M6 24h20" />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
          <circle cx="10" cy="16" r="2" fill="currentColor" />
          <circle cx="22" cy="24" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Custom Automation",
      description:
        "Automate the repetitive processes your team does manually — from reporting to data entry to notifications.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 16h6l3-8 6 16 3-8h6" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Tools",
      description:
        "Build intelligent tools tailored to how your business actually works — not off-the-shelf software you have to adapt to.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
          <circle cx="16" cy="16" r="5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-offwhite)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)] mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-[var(--color-gray-light)] hover:border-[var(--color-gold)] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-[var(--color-gold)] mb-5">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-black)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-gray)] leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
