import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../data/constants";
import { useInView } from "../hooks/useInView";

export default function Facilities() {
  const { ref, inView } = useInView();

  return (
    <section
      id="facilities"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#0a1628" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#4ade80" }}
        >
          Our Facilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-black text-white mb-4"
        >
          World-Class Training Facilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-400 max-w-xl mx-auto mb-14 text-base"
        >
          Everything you need to train like a professional, right here.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMAGES.facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-default"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)",
                }}
              />
              {/* Green accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                style={{ backgroundColor: "#4ade80" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-bold text-lg text-white">
                  {f.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
