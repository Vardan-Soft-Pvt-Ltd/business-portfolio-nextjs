import type { Config } from "tailwindcss";
import { Montserrat } from "next/font/google";

export default {
  content: [
    "./server/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-purple": "0 8px 6px rgba(236, 228, 248, 1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        PrimaryBlue: "#320972",
        SecondaryBlue: "#4f46e5",
        TextDarkBlue: "#2b3674",
        BtnBg: "#320972",
        LightPurple: "#F4F0FA",
        PurpleGray: "#e7e2f8",
      },

      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
