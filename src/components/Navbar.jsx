import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950 shadow-2xl backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "#0a1628" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#4ade80" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#0a1628" strokeWidth="2" />
              <path d="M6 12 Q12 6 18 12 Q12 18 6 12" stroke="#0a1628" strokeWidth="1.5" fill="none" />
              <path d="M12 2 Q12 12 12 22" stroke="#0a1628" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="font-display text-white font-bold text-sm md:text-base leading-tight tracking-wide">
              ACE ALLIANCE
            </div>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#4ade80" }}>
              Sports Academy
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#4ade80" }}
              />
            </button>
          ))}
          <a
            href="https://wa.me/919803947707?text=Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20would%20like%20to%20know%20more%20about%20your%20tennis%20coaching%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold text-navy-950 transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#4ade80", color: "#0a1628" }}
          >
            Enquire Now
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "#0a1628" }}
          >
            <div className="flex flex-col px-5 py-4 gap-3 border-t border-white/10">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left text-gray-300 hover:text-white font-medium py-2 text-base transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://wa.me/919803947707?text=Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20would%20like%20to%20know%20more%20about%20your%20tennis%20coaching%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 rounded-full text-center font-semibold text-sm"
                style={{ backgroundColor: "#4ade80", color: "#0a1628" }}
              >
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
