/** @type {import('tailwindcss').Config} */
const withMt = require("@material-tailwind/react/utils/withMT");
const { default: daisyui } = require('daisyui');

module.exports = withMt({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        cinzel: '"Cinzel", serif',
      },
      borderRadius: {
        custom: "0px 200px 200px 200px",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
});

