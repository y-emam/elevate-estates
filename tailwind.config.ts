import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#000080",
        silver: "#C0C0C0",
        "custom-light": "#f8f9fa",
        "custom-dark": "#e9ecef",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #f8f9fa, #e9ecef)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      animation: {
        rotate: "rotate 250s linear infinite",
        "zoom-in": "zoomIn 5s ease-in-out 1.4s infinite",
        "fade-in": "fadeIn 5s ease-in forwards 1.4s infinite",
        "gradient-move": "gradient-move 8s ease infinite",
        "gradient-pulse": "gradient-pulse 5s ease-in-out infinite",
        "gradient-color-shift": "gradient-color-shift 6s ease infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [],
};
export default config;
