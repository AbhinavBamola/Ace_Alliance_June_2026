import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Programs from "./components/Programs";
import Facilities from "./components/Facilities";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-body bg-white text-gray-900 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <WhyUs />
      <Programs />
      <Facilities />
      <Reviews />
      <Gallery />
      <Location />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
