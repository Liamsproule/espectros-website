"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)] mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-black)]">
            Start a Conversation
          </h2>
          <p className="mt-4 text-[var(--color-gray)] leading-relaxed">
            Tell us about your business and what you&apos;re looking to
            accomplish. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--color-black)] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-gray-light)] bg-[var(--color-offwhite)] text-[var(--color-black)] placeholder-[var(--color-gray)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-black)] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-gray-light)] bg-[var(--color-offwhite)] text-[var(--color-black)] placeholder-[var(--color-gray)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-[var(--color-black)] mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-gray-light)] bg-[var(--color-offwhite)] text-[var(--color-black)] placeholder-[var(--color-gray)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-colors"
              placeholder="Your company"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--color-black)] mb-2"
            >
              What are you looking to accomplish?
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-gray-light)] bg-[var(--color-offwhite)] text-[var(--color-black)] placeholder-[var(--color-gray)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-colors resize-none"
              placeholder="Tell us about your business, the challenges you're facing, and what you'd like to improve..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="btn-magnetic inline-block px-10 py-4 rounded-full bg-[var(--color-gold)] text-white font-medium text-lg hover:bg-[var(--color-gold-light)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
