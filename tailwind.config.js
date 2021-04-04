module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "julian-navy": "#181c25",
        "julian-orange": "#e76e52",
        "julian-red": "#ca516a",
        "julian-dark-grey": "#9c9293",
        "julian-med-grey": "#b9bbbe",
        "julian-light-grey": "#d1d2d4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
