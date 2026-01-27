/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sikiminkeyfi: {
          light: '#154D71',
          dark: '#154D71',
        },
        text: {
          light: '#ccd6f6',
          dim: '#8892b0',
        },
        navy: {
          700: '#1e3a5f',
          800: '#152d4a',
          900: '#0d1b2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
