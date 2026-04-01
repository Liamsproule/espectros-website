"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "What We Do", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-[calc(100%-2rem)] ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border border-[var(--color-gray-light)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
          scrolled ? "text-[var(--color-black)]" : "text-white"
        }`}
      >
        Espectros
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-all duration-300 hover:opacity-100 ${
              scrolled
                ? "text-[var(--color-gray)] hover:text-[var(--color-black)]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-magnetic text-sm font-medium px-5 py-2 rounded-full bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-light)]"
        >
          Start a Conversation
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 transition-all duration-300 ${
            mobileOpen
              ? `rotate-45 translate-y-2 ${scrolled ? "bg-[var(--color-black)]" : "bg-white"}`
              : scrolled
                ? "bg-[var(--color-black)]"
                : "bg-white"
          }`}
        />
        <span
          className={`block w-5 h-0.5 transition-all duration-300 ${
            mobileOpen
              ? "opacity-0"
              : scrolled
                ? "bg-[var(--color-black)]"
                : "bg-white"
          }`}
        />
        <span
          className={`block w-5 h-0.5 transition-all duration-300 ${
            mobileOpen
              ? `-rotate-45 -translate-y-2 ${scrolled ? "bg-[var(--color-black)]" : "bg-white"}`
              : scrolled
                ? "bg-[var(--color-black)]"
                : "bg-white"
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-[var(--color-gray-light)] p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[var(--color-gray)] hover:text-[var(--color-black)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-magnetic text-sm font-medium px-5 py-2.5 rounded-full bg-[var(--color-gold)] text-white text-center hover:bg-[var(--color-gold-light)]"
          >
            Start a Conversation
          </a>
        </div>
      )}
    </nav>
  );
}
