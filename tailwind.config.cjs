module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'weworkteal': {
          50: "#d9f7f5",
          100: "#cfeeeb",
          200: "#9fded6",
          300: "#6fcdc2",
          400: "#3fbdad",
          500: "#0fac99",
          600: "#0c8a7a",
          700: "#09675c",
          800: "#06453d",
          900: "#03221f"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}