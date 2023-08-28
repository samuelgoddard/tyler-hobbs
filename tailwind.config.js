const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#1D1917',
        'white': '#FFFDF8',
        'gray': '#929292'
      },
      fontFamily: {
        sans: ['var(--font-PolySans)', ...fontFamily.sans]
      },
    },
  },
  plugins: []
}