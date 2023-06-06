/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        //more narrow 3 columns
        '3s': 'repeat(3, minmax(0, 100px))',
      }
    },
  },
  plugins: [],
}