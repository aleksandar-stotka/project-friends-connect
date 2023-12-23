/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        // Define your custom colors here
        'custom-sec-text': '#3730a3 ',
        'on-line': '#a7f3d0',
        'custom-background': '#F5F5F5',
        'custom-text': '#333333',
        'name-color': '#2A363B ',
         'filter-color' : '#9d174d'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}