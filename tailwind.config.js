/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      xs: '376px',
      sm: '480px',
      md: '768px',
      lg: '907px', // Change this to 907px
      xl: '1440px',
      '2xl': '1920px', 
    },
    extend: {
      colors: {
strongCyan: 'hsl(172, 67%, 45%)',
veryDarkCyan: 'hsl(183, 100%, 15%)',
darkGrayishCyan: 'hsl(186, 14%, 43%)',
grayishCyan: 'hsl(184, 14%, 56%)',
lightGrayishCyan: 'hsl(185, 41%, 84%)',
veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
white: 'hsl(0, 0%, 100%)',
borderWidth: {
  '1': '1px',
},
      },
      fontSize: {
        inputs: '24px',
      },
      fontFamily: {
        body: ['Space Mono', 'monospace'],
      },
      fontWeight: {
        700: '700',
      },
    },
  },
  plugins: [],
}

