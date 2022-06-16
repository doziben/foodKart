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
    extend: {},
  },
  plugins: [],
};
