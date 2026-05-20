/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0a0a0a', elevated: '#111111', subtle: '#1a1a1a' },
        surface: { DEFAULT: '#141414', hover: '#1e1e1e' },
        gold: { DEFAULT: '#C9A96E', light: '#D4BA85', dark: '#A8894F' },
        cream: '#F5F0EB',
        text: { primary: '#FAFAF8', secondary: '#A09B93', muted: '#6B6560' },
        border: { DEFAULT: 'rgba(201, 169, 110, 0.12)', hover: 'rgba(201, 169, 110, 0.25)' },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        body: ["'Manrope'", '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
