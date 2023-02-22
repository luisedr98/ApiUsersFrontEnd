/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Lobster", "cursive"],
      body: ["Piazzolla", "serif"],
    },
    extend: {},
    plugins: [],
  },
});
