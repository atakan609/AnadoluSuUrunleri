/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundMain: {
          50:  '#e8f4fa',
          100: '#c5e3f3',
          200: '#9dd0eb',
          300: '#71bae1',
          400: '#4aa5d7',
          500: '#2590cdff',
          600: '#0f4262',
          700: '#0c3650',
          800: '#092a3e',
          900: '#061e2d',
          950: '#04131d',
          DEFAULT: '#0f4262',
        },
        text: {
          light: 'rgba(211, 229, 239, 1)',
          dim: '#8892b0',
        },
        navy: {
          700: '#1e3a5f',
          800: '#152d4a',
          900: '#0d1b2a',
        }
      },
      fontFamily: {
        sans: ['"Bree Serif"', 'serif'],
      }
    },
  },
  plugins: [],
}
