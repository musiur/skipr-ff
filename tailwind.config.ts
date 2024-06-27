import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "20%": { opacity: "1", transform: "translateY(-50%)" },
          "50%": { opacity: "60%", transform: "translateY(0)" },
          "80%": { opacity: "50%", transform: "translateY(100vh)" },
          "100%": { opacity: "0", transform: "translateY(100vh)" },
        }
      },
      animation: {
        fadeInDown: "fadeInDown 6s infinite linear"
      },
      colors: {
        primary: "#9900FF",
        secondary: "#17FFDD",
        darkish: '#002238',
      },
    },
  },
  plugins: [],
};
export default config;
