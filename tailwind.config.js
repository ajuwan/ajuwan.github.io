/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16'
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        secondery: '#64748b',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}

