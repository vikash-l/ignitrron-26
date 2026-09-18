/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
          blue: {
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
          },
          dark: {
            bg: '#09090b',
            card: '#141417',
            border: '#27272a',
            subtle: '#18181b',
          },
          light: {
            bg: '#faf9f6',
            card: '#ffffff',
            border: '#e4e4e7',
            subtle: '#f4f4f6',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'subtle-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'purple-glow': '0 0 25px -5px rgba(139, 92, 246, 0.25)',
      },
      backgroundImage: {
        'grid-pattern-dark': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        'grid-pattern-light': 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.04) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
