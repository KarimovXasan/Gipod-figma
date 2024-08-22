/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1140':'1140px'
      },
      colors:{
        'white':'#F5F3F4',
        'black':'#12100C',
        'yellow':'#FFAE33',
        'gray':'#999795',
        'pink':'#FFB0AE',
        'blue':'#2684FF',
        'orange':'#FC6D26',
      },
      boxShadow:{
        'remote':'box-shadow: -2px 2px 15px 8px rgba(255, 138, 0, 0.4)',
        'card-btn':'box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}