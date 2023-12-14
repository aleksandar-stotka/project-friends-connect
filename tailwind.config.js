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
        'custom-lightGrey': '#9DB2BF',
        'custom-background': '#DDE6ED',
        'custom-deepBlue': '#27374D',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}