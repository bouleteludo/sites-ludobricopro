import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Deep navy blue — primary brand color (header/footer, headings, buttons).
        navy: {
          950: "#081826",
          900: "#0c2338",
          800: "#123049",
          700: "#193f60",
          600: "#215678",
          500: "#2b6a94",
        },
        // Fresh green — secondary accent (icons, highlights, success states).
        // 500 carries white text at 5.3:1 (WCAG AA); 400/300 are for use on dark backgrounds.
        leaf: {
          700: "#1a5c2f",
          600: "#1c6533",
          500: "#237a3f",
          400: "#4dbb68",
          300: "#8ad63d",
          100: "#e3f5e8",
        },
        // Warm off-white background, close to the flyer's clean light look.
        mist: {
          50: "#f7f9fb",
          100: "#eef2f6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 12px 32px -16px rgba(8,24,38,0.25)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "check-draw": {
          from: { strokeDashoffset: "30" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 32s linear infinite",
        "check-draw": "check-draw 0.6s 0.3s cubic-bezier(0.65,0,0.35,1) both",
      },
    },
  },
  plugins: [typography],
};

export default config;
