/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/index.html"],
  theme: {
    colors: {
      'light-green': '#DDECE9',
      'some-green':'#6CE8BF',
      'dark-green':'#23423C',
      'not-black':'#222027',
      'white':'#DDECE9',
      'black':'#000'
    },
    extend: {
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
