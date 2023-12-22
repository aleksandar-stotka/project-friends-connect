/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        // Define your custom colors here
        'custom-sec-text': '#F4A261 ',
        'on-line': '#a7f3d0',
        'custom-background': '#96EFFF',
        'custom-text': '#BBAB8C',
        'name-color': '#2A363B '
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}