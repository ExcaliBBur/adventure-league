/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    colors: {
      'btn_color': '#F11312'
    },
    extend: {
      animation: {
        ani: 'ani 1s forwards',
        text_ani: "text_ani 3s forwards",
        photo_ani: "photo_ani 3s forwards"
      },
      keyframes: {
        ani: {
          '0%': {transform: "translateY(-150%)"},
          '100%': {transform: "translateY(0%)"}
        },
        text_ani: {
          '0%': {transform: "translateX(-150%)"},
          '100%': {transform: "translateY(0)"}
        },
        photo_ani: {
          '0%': {transform: "translateX(150%)"},
          '100%': {transform: "translateY(0)"}
        }
      }
    },
  },
  plugins: [],
}

