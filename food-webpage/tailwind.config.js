/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : '#E83667',
        primaryDark : '#bb2c51',
        secondary : '#D06F08',
        dark : '#303030',
      },
      container:{
        center : true,
        padding:{
          DEFFAULT : '1rem',
          sm : '2rem',
          lg : '3rem',
          xl : '4rem',
        }
      }
    },
  },
  plugins: [],
}