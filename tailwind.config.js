import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1B1B1B",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        montserrat: ["Playfair Display", "serif"],
        inter: ["Inter Tight", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "infinit-scroll": "loop-scroll 10s linear infinite ",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
