/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0B2B26',
        lime: '#C6F432',
        cream: '#F7F3EA',
        charcoal: '#161616',
        coral: '#FF7A59',
      },
      fontFamily: {
        display: ['Clash Display', 'Playfair Display', 'serif'],
        body: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
