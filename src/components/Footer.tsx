export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[var(--color-black)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-lg">Espectros</p>
            <p className="text-white/40 text-sm mt-1">
              Applied AI, Data & Automation Consultancy
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2">
            <a
              href="mailto:liam@espectros.net"
              className="text-white/60 text-sm hover:text-[var(--color-gold)] transition-colors"
            >
              liam@espectros.net
            </a>
            <p className="text-white/30 text-sm">Cyprus</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Espectros. All rights reserved.
          </p>

          {/* LinkedIn placeholder */}
          <a
            href="#"
            className="text-white/30 hover:text-[var(--color-gold)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
