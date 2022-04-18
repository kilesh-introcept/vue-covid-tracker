module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          default: '#4f46e5',
          dark: '#342e98',
          light: '#634dff',

        },
      },
      spacing: {
        '26r': '26rem',
        '30r': '30rem',
      }
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}