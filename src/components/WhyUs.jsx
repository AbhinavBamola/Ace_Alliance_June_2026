import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Professional Coaching",
    desc: "Learn from certified and experienced coaches committed to your improvement at every level.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <path d="M6 6h.01M10 6h.01" />
      </svg>
    ),
    title: "Well Maintained Courts",
    desc: "Train on professional-grade courts maintained to the highest standards for optimal play.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Personalized Attention",
    desc: "Small batch sizes ensure every student receives focused, individualized coaching feedback.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Fitness Development",
    desc: "Structured fitness programs to build speed, agility, stamina, and on-court endurance.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M6 12 Q12 6 18 12 Q12 18 6 12" />
        <path d="M12 2 L12 22" />
      </svg>
    ),
    title: "Match Practice Sessions",
    desc: "Regular match practice and simulated game situations to sharpen competitive instincts.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </svg>
    ),
    title: "Friendly Learning Environment",
    desc: "A positive and encouraging atmosphere where students of all ages feel confident to learn.",
  },
];

export default function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section
      id="why-us"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#f0fdf4" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#16a34a" }}
        >
          Why Choose Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-black mb-4"
          style={{ color: "#0a1628" }}
        >
          The Ace Alliance Difference
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-500 max-w-xl mx-auto mb-14 text-base md:text-lg"
        >
          Everything you need to grow as a tennis player, all under one roof.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10,22,40,0.12)" }}
              className="group bg-white rounded-2xl p-7 border border-gray-100 cursor-default transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#0a1628" }}
              >
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              <div
                className="mt-5 w-8 h-0.5 group-hover:w-16 transition-all duration-500 rounded-full"
                style={{ backgroundColor: "#4ade80" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
