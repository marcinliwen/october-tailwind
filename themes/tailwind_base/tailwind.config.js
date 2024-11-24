/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./content/**/*.{htm,js}",
    "./layouts/**/*.{htm,js}",
    "./pages/**/*.{htm,js}",
    "./partials/**/*.{htm,js}",
    "./resources/**/*.js",
"./assets/**/*.css"],
  theme: {
    container: {
        center: true,
        screens: {
          xl: "1440px",
        },
      },
    extend: {
        colors: {
            green: {
                200: '#53EF62',
                300:'#24EA37',
                400: '#11CE23'
            },
            grey: {
                100: '#BEBEBF',
                200: '#d1d1d1',
                300: '#353535',
                400: '#2F2F2F',
                500: '#3A3A3A',
                900: '#4d4d4d'
            },

            black: '#1a1a1a'

        }
    },
  },
  plugins: [],
}

