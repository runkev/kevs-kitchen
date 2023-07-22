/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        'xs': '280px',
        ...defaultTheme.screens,
    },

      backgroundColor: {
        'cream': '#FFFDF4',
        'brown': '#2F231D',
      },

      colors: {
        'cookie': '#DEA668',
      },

      fontFamily: {
        'hk-grotesk': ['HK Grotesk', 'sans-serif'],
      },

      gridTemplateColumns: {
        //more narrow 3 columns
        '3s': 'repeat(3, minmax(0, 100px))',
      },

    },
  },
    
  plugins: [],
}