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
        background: "#0A1109",
        lighterBackground: "#1A2310",
        secondary: "#303830",
        text: "#cdcfcd",
        greeny: "#7C9838",
        fabMainBlue: "#141C3C",
        fabMainBeige: "#D1D3CA",

      },

      boxShadow: {
        "neumorphic-hooked0ntech-box":
          "inset 4px 4px 8px -2px #2e362e, inset -6px -6px 6px -4px #000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#8E967E",
            a: {
              color: "#7C9838",
              "&:hover": {
                color: "#D7E0C5",
              },
            },
            strong: {
              color: "#D7E0C5",
            },
            code: {
              color: "#D7E0C5",
            },
            h1: {
              color: "#D7E0C5",
            },
            h2: {
              color: "#D7E0C5",
            },
            h3: {
              color: "#D7E0C5",
            },
            h4: {
              color: "#D7E0C5",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
