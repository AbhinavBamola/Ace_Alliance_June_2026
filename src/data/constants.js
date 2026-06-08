// Import your images
import hero from "../assets/images/hero.jpg";
import coach from "../assets/images/coach.jpg";
import facilityCourts from "../assets/images/facility-courts.jpg";
import facilityEquipment from "../assets/images/facility-equipment.jpg";
import facilityFitness from "../assets/images/facility-fitness.jpg";
import facilityMatch from "../assets/images/facility-match.jpg";
import facilitySkill from "../assets/images/facility-skill.jpg";
import facilityPerformance from "../assets/images/facility-performance.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";
import ctaBg from "../assets/images/cta-bg.jpg";

export const IMAGES = {
  hero: hero,
  heroOverlay: ctaBg,
  coach: coach,
  facilities: [
    { title: "Tennis Courts",       img: facilityCourts },
    { title: "Training Equipment",  img: facilityEquipment },
    { title: "Fitness Conditioning",img: facilityFitness },
    { title: "Match Practice",      img: facilityMatch },
    { title: "Skill Development",   img: facilitySkill },
    { title: "Performance Training",img: facilityPerformance },
  ],
  gallery: [
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7, gallery8,
  ],
};
export const CONTACT = {
  phone: "98039 47707",
  phoneRaw: "+919803947707",
  whatsappBase: "https://wa.me/919803947707",
  whatsappHero: "https://wa.me/919803947707?text=Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20would%20like%20to%20know%20more%20about%20your%20tennis%20coaching%20programs.",
  whatsappGeneral: "https://wa.me/919803947707?text=Hello%20Ace%20Alliance%20Sports%20Academy.%20I%20am%20interested%20in%20your%20tennis%20coaching%20programs.",
  mapsLink: "https://share.google/f2dtdXBPjzUziubuP",
  address: "Ace Alliance Sports Academy, Dehradun, Uttarakhand",
};