/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'index.html',],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#F8FAFC',
        whites: '#FFFFFF',
        roses: '#47da97',
        greens: '#47da97',
        blacks: '#2b2b2b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
