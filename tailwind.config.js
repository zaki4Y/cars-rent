/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', '-apple-system', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BA85',
          dark: '#A8894F',
        },
        cream: '#F5F0EB',
        surface: {
          DEFAULT: '#141414',
          hover: '#1e1e1e',
        },
        bg: {
          DEFAULT: '#0a0a0a',
          elevated: '#111111',
          subtle: '#1a1a1a',
        },
        text: {
          primary: '#FAFAF8',
          secondary: '#A09B93',
          muted: '#6B6560',
        },
      },
    },
  },
  plugins: [],
}
