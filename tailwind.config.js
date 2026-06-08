/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#dde6ff",
          200: "#c2d0ff",
          300: "#9db0ff",
          400: "#7285ff",
          500: "#4d5cff",
          600: "#3439f5",
          700: "#2b2cd6",
          800: "#2727ac",
          900: "#262788",
          950: "#0a1628",
        },
        tennis: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
    },
  },
  plugins: [],
};
