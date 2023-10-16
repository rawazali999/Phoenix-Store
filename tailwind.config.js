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
        custom1: "#176B87",
        custom2: "#64CCC5",
        custom3: "#183D3D",
        custom4: "#EEEEEE",
        custom5: "#F1F6F9",
        dark1: "#041C32",
      },
    },
  },
  plugins: [],
};
