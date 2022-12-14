/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // eslint-disable-next-line prettier/prettier
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: "media",
  daisyui: {
    themes: ["light", "dark"],
  }
};
