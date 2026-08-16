import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0B0D",
        surface: "#15171B",
        surface2: "#1C1F24",
        ash: "#8B8D93",
        bone: "#EDEDEE",
        gold: {
          DEFAULT: "#D4A857",
          dim: "#8A7238",
          bright: "#F0C878",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          dim: "#2E7A72",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "grain-gradient":
          "linear-gradient(180deg, rgba(212,168,87,0.06) 0%, rgba(10,11,13,0) 60%)",
      },
      boxShadow: {
        "glow-gold": "0 0 40px -8px rgba(212,168,87,0.45)",
        "glow-teal": "0 0 40px -8px rgba(79,209,197,0.4)",
        "inner-line": "inset 0 1px 0 0 rgba(237,237,238,0.06)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        flicker: "flicker 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.94" },
          "50%": { opacity: "1" },
          "72%": { opacity: "0.97" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
