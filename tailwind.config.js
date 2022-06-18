module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        'butler-stencil': ['Butler Stencil'],
      },
      fontSize: {
        base: ['1rem', '1.563rem'], // 16px 25px
        lg: ['1.25rem', '1.5rem'], // 20px 24px
        xl: ['1.5rem', '1.875rem'], // 24px 30px
        '2xl': ['2rem', '2.812rem'], // 32px 45px
        '3xl': ['3rem', '3.65rem'], // 48px 58.5px
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#797A7E',
          300: '#1A1B1F',
        },
        blue: {
          100: '#F4F6F8',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
