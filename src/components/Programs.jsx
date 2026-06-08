import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const programs = [
  {
    name: "Group Coaching",
    tag: "Most Popular",
    featured: true,
    pricing: [
      { label: "1 Month", price: "₹3,000" },
      { label: "3 Months", price: "₹8,500" },
      { label: "6 Months", price: "₹15,000" },
    ],
    desc: "Structured group sessions designed to improve technique, consistency, fitness, and match awareness.",
    perks: [
      "Up to 8 students per batch",
      "5 sessions per week",
      "Technique & drills focus",
      "Match awareness training",
      "Progress tracking",
    ],
    waMessage:
      "Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20am%20interested%20in%20Group%20Coaching.",
  },
  {
    name: "Semi-Private Coaching",
    tag: "Great Value",
    featured: false,
    pricing: [{ label: "Per Month", price: "₹12,000" }],
    desc: "Small group coaching with greater individual attention and customized improvement plans.",
    perks: [
      "2–3 students per session",
      "Personalized feedback",
      "Customized improvement plan",
      "Flexible scheduling",
      "Performance tracking",
    ],
    waMessage:
      "Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20am%20interested%20in%20Semi-Private%20Coaching.",
  },
  {
    name: "Private Coaching",
    tag: "Premium",
    featured: false,
    pricing: [{ label: "Per Month", price: "₹18,000" }],
    desc: "One-on-one coaching tailored to your goals, skill level, and competitive aspirations.",
    perks: [
      "1-on-1 dedicated sessions",
      "Goal-specific training",
      "Competition preparation",
      "Video analysis support",
      "Priority scheduling",
    ],
    waMessage:
      "Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20am%20interested%20in%20Private%20Coaching.",
  },
];

export default function Programs() {
  const { ref, inView } = useInView();

  return (
    <section id="programs" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#16a34a" }}
        >
          Training Programs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-black mb-4"
          style={{ color: "#0a1628" }}
        >
          Choose Your Program
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-500 max-w-xl mx-auto mb-14 text-base"
        >
          Flexible coaching programs designed for every skill level and schedule.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-7">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                p.featured
                  ? "shadow-2xl scale-[1.02] md:scale-105"
                  : "border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              }`}
              style={
                p.featured
                  ? { backgroundColor: "#0a1628" }
                  : { backgroundColor: "#fff" }
              }
            >
              {/* Tag */}
              <div
                className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold tracking-wide`}
                style={
                  p.featured
                    ? { backgroundColor: "#4ade80", color: "#0a1628" }
                    : { backgroundColor: "#f0fdf4", color: "#16a34a" }
                }
              >
                {p.tag}
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1">
                {/* Name */}
                <h3
                  className={`font-display font-black text-xl mb-4 ${
                    p.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {p.name}
                </h3>

                {/* Pricing */}
                <div className="mb-5 space-y-2">
                  {p.pricing.map((pr) => (
                    <div key={pr.label} className="flex items-center justify-between">
                      <span
                        className={`text-sm font-medium ${
                          p.featured ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {pr.label}
                      </span>
                      <span
                        className={`font-display font-black text-xl ${
                          p.featured ? "text-white" : "text-gray-900"
                        }`}
                        style={p.featured ? {} : { color: "#16a34a" }}
                      >
                        {pr.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className={`h-px mb-5 ${
                    p.featured ? "bg-white/15" : "bg-gray-100"
                  }`}
                />

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    p.featured ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {p.desc}
                </p>

                {/* Perks */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: p.featured ? "#4ade80" : "#dcfce7" }}
                      >
                        <svg
                          className="w-2.5 h-2.5"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke={p.featured ? "#0a1628" : "#16a34a"}
                          strokeWidth="2"
                        >
                          <polyline points="2 6 5 9 10 3" />
                        </svg>
                      </div>
                      <span
                        className={`text-sm ${
                          p.featured ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/919803947707?text=${p.waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 ${
                    p.featured
                      ? "text-gray-900 hover:opacity-90"
                      : "text-white hover:opacity-90"
                  }`}
                  style={
                    p.featured
                      ? { backgroundColor: "#4ade80" }
                      : { backgroundColor: "#0a1628" }
                  }
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
