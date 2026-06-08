import React from "react";
import { motion } from "framer-motion";
import { IMAGES, CONTACT } from "../data/constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Tennis Academy"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,22,40,0.93) 0%, rgba(10,22,40,0.75) 60%, rgba(10,22,40,0.55) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, #f9fafb)",
          }}
        />
      </div>

      {/* Decorative tennis ball accent */}
      <div
        className="absolute top-1/4 right-10 md:right-20 w-64 h-64 rounded-full opacity-5 border-4"
        style={{ borderColor: "#4ade80" }}
      />
      <div
        className="absolute top-1/3 right-16 md:right-28 w-40 h-40 rounded-full opacity-10 border-2"
        style={{ borderColor: "#4ade80" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ backgroundColor: "rgba(74,222,128,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Now Enrolling — All Skill Levels Welcome
            </span>
          </motion.div>

          {/* Academy name */}
          <motion.div {...fadeUp(0.2)}>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#4ade80" }}
            >
              Ace Alliance Sports Academy
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.3)}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            Professional
            <span className="block" style={{ color: "#4ade80" }}>
              Tennis Coaching
            </span>
            for All Skill Levels
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Develop your game with structured coaching, professional guidance,
            and a supportive training environment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={CONTACT.whatsappHero}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-7 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "#4ade80",
                color: "#0a1628",
                boxShadow: "0 0 0 0 rgba(74,222,128,0)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 40px rgba(74,222,128,0.4)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(74,222,128,0)")
              }
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire on WhatsApp
            </a>
            <button
              onClick={() =>
                document
                  .querySelector("#programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-base text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-300"
            >
              View Programs
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.75)}
            className="flex gap-8 mt-12 pt-10 border-t border-white/15"
          >
            {[
              { value: "500+", label: "Students Trained" },
              { value: "10+", label: "Years Experience" },
              { value: "All", label: "Skill Levels" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display text-2xl md:text-3xl font-black"
                  style={{ color: "#4ade80" }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-0.5 h-8 rounded-full"
          style={{ backgroundColor: "rgba(74,222,128,0.5)" }}
        />
      </motion.div>
    </section>
  );
}
