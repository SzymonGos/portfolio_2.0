module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      fontSize: {
        xs: ['0.875rem', '2rem'], // 14px 32px
        sm: ['1rem', '2rem'], // 16px 32px
        base: ['1.125rem', '2rem'], // 18px 32px
        lg: ['1.5rem', '1.914rem'], // 24px 30.62px
        xl: ['3rem', '3.828rem'], // 48px 61.25px
      },
      weight: {
        normal: 400,

        bold: 900,
      },
      colors: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
