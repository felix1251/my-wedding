/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#F5E1CC",
      },
      backgroundPosition: {
        'pos-center-top': 'center top 1rem',
      },
    },
  },
  plugins: [],
}
