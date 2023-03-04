/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Branbold: ['Branbold'],
        Branlight: ['Branlight'],
        Branthin: ['Branthin'],
        Branregular: ['Branreg'],
        Branitalic: ['Branitalic'],
        AvenirHeavy: ['AvenirHeavy'],
        EinaBold: ['EinaBold'],
        GilroyBold: ['GilroyBold'],
        GilroyRegular: ['GilroyRegular']
      },
    },
  },
  plugins: [],
}
