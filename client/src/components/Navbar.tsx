/*
 * CYCLIC NAVBAR — "Structured Clarity" Design
 * Navy background, white text, orange CTA
 * Scroll-aware: transparent on hero, solid on scroll
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "WHO WE ARE", href: "#about" },
  { label: "WHAT WE DO", href: "#services" },
  { label: "OUR WORKS", href: "#works" },
  { label: "BLOG", href: "#blog" },
  { label: "CAREER", href: "#career" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(13, 31, 60, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-[#ff5722] text-white font-black text-sm tracking-tight leading-none select-none">
              CY
            </div>
            <span className="text-white font-bold text-lg tracking-wide hidden sm:block">
              CYCLIC
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="nav-link bg-transparent border-none p-0"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="btn-primary text-xs py-2 px-5"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col pt-20 pb-8 px-6"
          style={{
            background: "#0d1f3c",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease",
          }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left text-white/80 hover:text-white font-medium text-sm tracking-widest py-3 border-b border-white/10 bg-transparent border-l-0 border-r-0 border-t-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-8">
            <button
              onClick={() => handleNav("#contact")}
              className="btn-primary w-full justify-center"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
