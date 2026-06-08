import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Student, Age 16",
    rating: 5,
    text: "Excellent coaching and a great environment for learning tennis. My serve and footwork have improved tremendously in just a few months of training here.",
    initials: "RS",
    color: "#0a1628",
  },
  {
    name: "Priya Mehta",
    role: "Parent of Student",
    rating: 5,
    text: "Professional guidance and noticeable improvement in my son's game. The coaches are attentive and really understand how to bring out the best in young players.",
    initials: "PM",
    color: "#16a34a",
  },
  {
    name: "Vikram Negi",
    role: "Adult Learner",
    rating: 5,
    text: "Highly recommended for beginners and competitive players alike. I started from scratch and now feel confident on the court. The structured approach really works.",
    initials: "VN",
    color: "#1d4ed8",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section
      id="reviews"
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
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-black mb-4"
          style={{ color: "#0a1628" }}
        >
          What Our Students Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-500 max-w-xl mx-auto mb-14 text-base"
        >
          Real stories from students and parents who've trained with us.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="font-display text-5xl font-black leading-none mb-4 -mt-1"
                style={{ color: "#4ade80" }}
              >
                "
              </div>

              <Stars count={r.rating} />

              <p className="text-gray-600 text-base leading-relaxed mt-4 mb-6 flex-1">
                {r.text}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#0a1628" }}>
                    {r.name}
                  </div>
                  <div className="text-gray-400 text-xs">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <Stars count={5} />
          <p className="mt-3 text-gray-500 text-sm">
            <span className="font-bold text-gray-900">5.0 out of 5</span> — Based on 50+ student reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
