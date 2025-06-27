/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#84a584',
          500: '#6b8e6b',
          600: '#547154',
          700: '#445a44',
          800: '#394a39',
          900: '#2f3e2f',
        },
        beige: {
          50: '#fdfcf8',
          100: '#f8f4e6',
          200: '#f0e7c7',
          300: '#e6d5a3',
          400: '#dcc284',
          500: '#d1ae6b',
          600: '#c49a54',
          700: '#a37f44',
          800: '#846539',
          900: '#6b522f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};