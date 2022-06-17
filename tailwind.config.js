/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*",
    "./src/**/*.{js, jsx}",
    "./src/components/**/*.{html,js, jsx}",
    "./src/components/layout/**/*.{html,js, jsx}",
    "./src/components/ui/**/*.{html,js, jsx}",
    "./index.html",
  ],
  theme: {
    colors: {
      pry: "#66A936",
      sec: "#CD221B",
      dark: "#191A1C",
    },
    extend: {
      animation: {
        slide: "slide 300ms ease-out forwards",
      },
      keyframes: {
        slide: {
          "0%": { opacity: 0, transform: "translateY(-3rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
