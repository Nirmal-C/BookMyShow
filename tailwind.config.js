module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        jaga:
          

  {
    50: '#ffffda',
    100: '#ffffad',
    200: '#ffff7d',
    300: '#ffff4b',
    400: '#ffff1a',
    500: '#e5e600',
    600: '#b2b300',
    700: '#7f8000',
    800: '#4c4d00',
    900: '#191b00',
  },
   navCol: 
{
  50: '#fff7da',
  100: '#ffe6ad',
  200: '#ffd57d',
  300: '#ffc44b',
  400: '#ffb31a',
  500: '#e69a00',
  600: '#b37800',
  700: '#815500',
  800: '#4e3300',
  900: '#1e1000',
}

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
