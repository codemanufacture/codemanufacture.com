/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
