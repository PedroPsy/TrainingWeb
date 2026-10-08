/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#e50914',
          600: '#b80710',
        },
        dark: {
          800: '#1f1f1f',
          900: '#121212',
          950: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
