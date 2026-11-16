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
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        navy: {
          800: '#0F2744',
          900: '#0A1B2F',
          950: '#06101E',
        },
        accent: {
          amber: '#f59e0b',
          orange: '#ea580c',
          red: '#dc2626'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(10, 37, 64, 0.08), 0 2px 6px -1px rgba(10, 37, 64, 0.04)',
        'elevated': '0 20px 40px -15px rgba(10, 37, 64, 0.12), 0 0 0 1px rgba(10, 37, 64, 0.05)',
      }
    },
  },
  plugins: [],
}
