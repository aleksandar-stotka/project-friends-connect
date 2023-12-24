/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        // Define your custom colors here
        'custom-sec-text-filter': '#9AD0C2 ',
        'on-line': '#a7f3d0',
        'custom-background': '#2D9596',
        'custom-text': '#9AD0C2',
        'name-color': '#2A363B ',
         'filter-color' : '#9AD0C2'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}