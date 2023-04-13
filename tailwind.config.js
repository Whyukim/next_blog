/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-gray": "#e5e5e5",
        "color-blue": "#243c5a",
        "color-yellow": "yellow",
      },
      minHeight: {
        "main-min": "calc(100vh - 5rem)",
      },
      gridTemplateColumns: {
        posts: "repeat(3, minmax(0, 300px))",
      },
      gridAutoRows: {
        posts: "55% 45%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
