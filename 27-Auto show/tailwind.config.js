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
        gr: {
          base: '#030303',
          charcoal: '#101010',
          burnt: '#17110D',
          darkred: '#4A0A07',
          flame: '#D72614',
          hotorange: '#FF6A00',
          fireyellow: '#FFB000',
          text: '#F5F2EC',
          muted: '#858585',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'flame-glow': '0 0 35px -5px rgba(255, 106, 0, 0.4)',
        'red-glow': '0 0 35px -5px rgba(215, 38, 20, 0.4)',
        'fire-border': '0 0 20px rgba(255, 106, 0, 0.3)',
        'scorched-card': '0 15px 35px -10px rgba(0, 0, 0, 0.95), 0 0 1px 1px rgba(255, 106, 0, 0.15)',
      },
      backgroundImage: {
        'asphalt-grain': 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)',
        'flame-gradient': 'linear-gradient(135deg, #D72614 0%, #FF6A00 50%, #FFB000 100%)',
        'dark-ember': 'radial-gradient(circle at 50% 30%, rgba(74, 10, 7, 0.4) 0%, rgba(3, 3, 3, 0.95) 80%)',
      },
      animation: {
        'fire-trail': 'fireTrail 10s ease-in-out infinite alternate',
        'flicker': 'fireFlicker 3s ease-in-out infinite',
        'smoke-float': 'smokeFloat 12s linear infinite',
      },
      keyframes: {
        fireTrail: {
          '0%': { strokeDashoffset: '0', opacity: '0.4' },
          '50%': { opacity: '0.8' },
          '100%': { strokeDashoffset: '400', opacity: '0.4' },
        },
        fireFlicker: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(255, 106, 0, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(215, 38, 20, 0.8))' },
        },
        smokeFloat: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.2' },
          '50%': { transform: 'translateY(-20px) scale(1.05)', opacity: '0.35' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '0.2' },
        }
      }
    },
  },
  plugins: [],
}
