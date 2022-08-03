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
        custom1: "#001d3d",
        custom2: "#F55353",
        custom3: "#FEB139",
        custom4: "#FFCD38",
        custom5: "#219ebc",
        custom6: "#8ecae6",
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
