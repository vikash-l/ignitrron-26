/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gambit: {
          black: '#050506',
          dark: '#0B0A0E',
          wine: '#140A15',
          burgundy: '#1A0C1C',
          violet: '#6B1FDB',
          purple: '#8F26FF',
          magenta: '#E626FF',
          pink: '#FF3BE6',
          text: '#F8F5FC',
          muted: '#B8B0C4',
          border: 'rgba(143, 38, 255, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      animation: {
        'subtle-float': 'subtleFloat 7s ease-in-out infinite',
        'soft-glow': 'softGlow 5s ease-in-out infinite',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        softGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
