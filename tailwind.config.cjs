/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ctaText: "hsl(356, 100%, 66%)",
        ctaHover: "hsl(355, 100%, 74%)",
        heading: "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        "v-d-grayishBlue": "hsl(207, 13%, 34%)",
        "v-d-black-blue": "hsl(240, 10%, 16%)",
        "introGrad-1": "hsl(13, 100%, 72%)",
        "introGrad-2": "hsl(353, 100%, 62%)",
        "bodyGrad-1": "hsl(237, 17%, 21%)",
        "bodyGrad-2": "hsl(237, 23%, 32%)",
      },
    },
    fontFamily: {
      overPass: ['"Overpass"', "sans-serif"],
      ubuntu: ['"Ubuntu"', "sans-serif"],
    },
  },
  plugins: [],
};
