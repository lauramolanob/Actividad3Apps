/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['MontserratRegular'],
        'montserrat-bold': ['MontserratBold'],
        'montserrat-italic': ['MontserratItalic'],
        'SansRegular': ['SansRegular'],
        'SansBold': ['SansBold'],
        'SansItalic': ['SansItalic'],
      },
      },
    },
      plugins: [],
   }
