/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        poppins: ["Poppins"],
        PtSans: ["PT Sans"],
        Robonto: ["Roboto Condensed"],
      },
      colors: {
        navy: "#143F6B",
        myRed: "#F55353",
        myOrange: "#FEB139",
        myYellow: "#FFCD38",
      },
    },

    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "520px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
