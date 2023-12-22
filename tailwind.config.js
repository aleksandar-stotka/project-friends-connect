/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        // Define your custom colors here
        'custom-blueBtn': '#526D82',
        'on-line': '#a7f3d0',
        'custom-background': '#DDE6ED',
        'custom-deepBlue': '#7dd3fc',
        'first-element': '#FA8072'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}