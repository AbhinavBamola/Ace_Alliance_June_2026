import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../data/constants";
import { useInView } from "../hooks/useInView";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Professional Coaching",
    desc: "Certified coaching techniques adapted to each player's level.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Structured Training",
    desc: "Systematic curriculum from fundamentals to advanced play.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Individual Attention",
    desc: "Focused feedback to correct technique and accelerate progress.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Match Preparation",
    desc: "Tactical coaching and real match scenarios for competitive players.",
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#16a34a" }}
        >
          Our Coaching
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-black mb-16"
          style={{ color: "#0a1628" }}
        >
          Meet Your Coach
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2"
              style={{ borderColor: "#4ade80" }}
            />
            <img
              src={IMAGES.coach}
              alt="Head Coach - Ace Alliance Sports Academy"
              className="relative z-10 w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            {/* Floating badge */}
            <div
              className="absolute z-20 -bottom-5 -right-5 px-5 py-3 rounded-xl shadow-xl"
              style={{ backgroundColor: "#0a1628" }}
            >
              <div className="font-display text-2xl font-black" style={{ color: "#4ade80" }}>
                10+
              </div>
              <div className="text-white text-xs font-medium">Years Coaching</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our coaching philosophy focuses on developing strong fundamentals,
              technical excellence, fitness, discipline, and confidence. Whether
              you are a beginner or an aspiring competitive player, our programs
              are designed to help you improve consistently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-300"
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    style={{ backgroundColor: "#0a1628" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 mb-0.5">
                      {f.title}
                    </div>
                    <div className="text-gray-500 text-xs leading-relaxed">
                      {f.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
