import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      "background":"#0A1109",
      "lighterBackground":"#1A2310",
      "secondary":"#303830",
      "text":"#cdcfcd",
      "greeny":"#7C9838",
    },

      boxShadow: {
        'neumorphic-hooked0ntech-box': 'inset 4px 4px 8px -2px #2e362e, inset -6px -6px 6px -4px #000000',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
