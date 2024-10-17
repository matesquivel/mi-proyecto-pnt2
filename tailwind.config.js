/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro utilizando la clase 'dark'
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js', // Añade los componentes de Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Incluye DaisyUI
    require('flowbite/plugin'), // Incluye Flowbite
  ],
};