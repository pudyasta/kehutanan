/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-right":
          "linear-gradient(to right, #7A7054, #A69A49,#93B46E, #6B9CC9)",
        "gradient-to-left":
          "linear-gradient(to right, #6B9CC9,#93B46E, #A69A49, #7A7054)",
      },
      fontFamily: {
        sans: ["var(--font-neumachina)"],
      },
      colors: {
        primary: "#A69A49",
        secondary: "#93B46E",
        tertiary: "#6B9CC9",
        darkGold: "#7A7054",
      },
    },
  },
  plugins: [],
};
