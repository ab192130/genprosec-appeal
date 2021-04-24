module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
      scale: ['active']
    },
  },
  plugins: [],
}
