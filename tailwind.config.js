/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./public/**/*.{html,js}`],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#059669',
        black: '#0F172A'
      },
      screens: {
        'xl': '1150px'
      }
    },
  },
  plugins: [],
}
