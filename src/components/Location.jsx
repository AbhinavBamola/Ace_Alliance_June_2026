import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data/constants";
import { useInView } from "../hooks/useInView";

export default function Location() {
  const { ref, inView } = useInView();

  return (
    <section
      id="location"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#f9fafb" }}
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
          Find Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-black mb-14"
          style={{ color: "#0a1628" }}
        >
          Our Location
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 space-y-5"
          >
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: "#0a1628" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#4ade80" }}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0a1628"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                Academy Address
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {CONTACT.address}
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#4ade80" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span className="text-gray-300 text-sm">{CONTACT.phone}</span>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-105 w-full"
              style={{ backgroundColor: "#16a34a" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 w-full border-2"
              style={{ borderColor: "#0a1628", color: "#0a1628" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Us Now
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            style={{ height: "420px" }}
          >
            <iframe
              title="Ace Alliance Sports Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110900.98963695219!2d77.92968987!3d30.31658485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
