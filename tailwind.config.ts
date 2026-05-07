import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#030c17",
          900: "#06111f",
          800: "#09192e",
          700: "#0c2743",
          600: "#103560",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#dfc060",
          dark: "#b8860b",
          pale: "rgba(212,175,55,0.12)",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
