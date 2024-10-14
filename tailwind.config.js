/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'image-patter': "url('../../image-patter.webp')"
      }
    },
  },
  plugins: [],
}
