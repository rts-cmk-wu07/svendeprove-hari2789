
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#5E2E53",
        secondary: "#EAEAEA",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'hero-login': "url('/src/assets/dance.png')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
