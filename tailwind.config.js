module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        'butler-stencil': ['Butler Stencil'],
      },
      fontSize: {
        sm: ['0.937rem', '1.5rem'], // 15px 24px
        base: ['1rem', '2rem'], // 16px 32px
        lg: ['1.5rem', '2.25rem'], // 24px 36px
        xl: ['4rem', '4.8rem'], // 64px 76.8px
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
