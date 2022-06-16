module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        'butler-stencil': ['Butler Stencil'],
      },
      fontSize: {
        base: ['1.125rem', '2rem'], // 18px 32px
      },
      fontWeight: {
        normal: 400,
        bold: 900,
      },
      colors: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
