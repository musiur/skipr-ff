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
          "0%": { opacity: "0", transform: "translate(-20vw,-100%)" },
          "20%": { opacity: "70%", transform: "translate(-10vw,-50%)" },
          "50%": { opacity: "60%", transform: "translate(0)" },
          "80%": { opacity: "50%", transform: "translate(10vw, 50%)" },
          "100%": { opacity: "0", transform: "translate(20vw,150%)" },
        }
      },
      animation: {
        fadeInDown: "fadeInDown 6s infinite linear",
        slowPing: "slow__ping 3s cubic-bezier(0, 0, 1, 1.4) infinite;"
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
