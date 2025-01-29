/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB',    // blue-600
          light: '#60A5FA',   // blue-400
        },
        secondary: {
          DEFAULT: '#1F2937', // gray-800
          dark: '#111827',    // gray-900
          light: '#6B7280',    // gray-700
        }
      }
    },
  },
  plugins: [],
  // Add this to exclude node_modules from processing
  ignoreFiles: ['node_modules/**/*.css'],
}
