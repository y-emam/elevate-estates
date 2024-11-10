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
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      animation: {
        rotate: "rotate 250s linear infinite",
        "zoom-in": "zoomIn 5s ease-in-out 1.5s infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
