/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
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
        custom2: "#D61C4E",
        custom3: "#89CFFD",
        custom4: "#277BC0",
        custom5: "#fff",
        dark1: "#022C43",
        darkFrom: "#001233",
        darkTo: "#101828",
      },
    },

    screens: {
      sm: "526px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
