/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './src/**/*.tsx',
    "./node_modules/flowbite/**/*.js",
  ],
  
  plugins: [
    require('flowbite/plugin')
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        ignite:{
          500: '#129E57'
        },
        orange:{
          500: '#D1754C',
          700: '#D1752D'
        },
        gray: {
          100: '#E1E1E6',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        }
      }
    },
  },
}
