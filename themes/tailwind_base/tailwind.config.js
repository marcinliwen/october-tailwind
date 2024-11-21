/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./content/**/*.{htm,js}",
    "./layouts/**/*.{htm,js}",
    "./pages/**/*.{htm,js}",
    "./partials/**/*.{htm,js}",
    "./resources/**/*.js",
"./assets/**/*.css"],
  theme: {
    extend: {
        colors: {
            green: {
                200: '#53EF62',
                300:'#24EA37',
                400: '#11CE23'
            },
            grey: {
                100: '#BEBEBF',
                300: '#353535',
                400: '#2F2F2F'

            },
            black: '#1a1a1a'

        }
    },
  },
  plugins: [],
}

