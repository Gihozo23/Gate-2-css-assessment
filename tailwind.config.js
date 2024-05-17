/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        lato: ['Lato']
      },
      colors:{
        customGold: '#a18a4d',
        myColor:"#333",
      },
    },
  },
  plugins: [],
}

