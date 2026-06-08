# Ace Alliance Sports Academy — Website

A production-ready single-page website for Ace Alliance Sports Academy, built with React + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ace-alliance/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Fixed nav with mobile menu
│   │   ├── Hero.jsx            ← Full-width hero section
│   │   ├── About.jsx           ← Coach profile section
│   │   ├── WhyUs.jsx           ← 6 feature cards
│   │   ├── Programs.jsx        ← Pricing cards
│   │   ├── Facilities.jsx      ← Image grid
│   │   ├── Reviews.jsx         ← Testimonials
│   │   ├── Gallery.jsx         ← Photo gallery with lightbox
│   │   ├── Location.jsx        ← Google Maps + address
│   │   ├── Contact.jsx         ← Contact section
│   │   ├── FinalCTA.jsx        ← Final call-to-action
│   │   └── Footer.jsx          ← Footer with links
│   ├── data/
│   │   └── constants.js        ← ⭐ EDIT IMAGES & CONTACT HERE
│   ├── hooks/
│   │   └── useInView.js        ← Scroll animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

---

## ✏️ How to Customize

### 1. Replace Images
Edit `src/data/constants.js` → `IMAGES` object.
Replace Unsplash URLs with your real academy photo URLs.

```js
export const IMAGES = {
  hero: "YOUR_HERO_IMAGE_URL",
  coach: "YOUR_COACH_PHOTO_URL",
  facilities: [
    { title: "Tennis Courts", img: "YOUR_IMAGE_URL" },
    // ...
  ],
  gallery: [
    "YOUR_GALLERY_IMAGE_1",
    "YOUR_GALLERY_IMAGE_2",
    // ...
  ],
};
```

### 2. Update Contact Info
Edit `src/data/constants.js` → `CONTACT` object.

### 3. Update Google Maps
Replace the `googleMapsEmbed` URL in `constants.js` with your actual embed URL from Google Maps.

---

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — just click Deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion 11** — Animations
- **Vite 5** — Build tool
- **Google Fonts** — Barlow Condensed (headings) + DM Sans (body)

---

## 📞 Support

Built for Ace Alliance Sports Academy, Dehradun.
Phone: 98039 47707
