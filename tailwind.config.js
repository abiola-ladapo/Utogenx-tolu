/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container:{
      center:true,
      padding:0,
      margin:0,
    },

    extend: {
      colors:{
        'uto-blue':'#15AAFF',
        'news-blue':'#075C9B',
      },
      fontFamily:{
        montserrat:['Montserrat']
      },
    },
  },
  plugins: [],
}
