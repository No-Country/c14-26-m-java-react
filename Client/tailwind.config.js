/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
      'custom-gray': '#737373',
      'custom-sky-blue' : '#23A6F0'
    },
      backgroundColor: {
        'custom-blue': '#252b42',
        'custom-green': '#2DC071',
      }
    },
  },
  plugins: [],
}