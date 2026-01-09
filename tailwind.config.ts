import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0a0a0a",
          charcoal: "#1c1c1c",
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F4D03F",
            dark: "#AA8C2C",
            muted: "#C5A028",
          },
          cream: "#F9F9F7",
          stone: {
            DEFAULT: "#E6E6E0",
            light: "#F0F0EB",
            dark: "#Cccccc",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(to right, #0a0a0a, #1c1c1c)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
