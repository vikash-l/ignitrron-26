/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tva: {
          bg: '#050706',
          surface: '#0A100D',
          emerald: '#16A36A',
          green: '#35D98B',
          gold: '#C8A951',
          softgold: '#E1C66A',
          text: '#F4F7F5',
          muted: '#8E9A94',
          border: 'rgba(53, 217, 139, 0.15)',
          glass: 'rgba(10, 16, 13, 0.75)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['Orbitron', 'monospace'],
      },
      animation: {
        'portal-spin': 'portalSpin 30s linear infinite',
        'portal-spin-reverse': 'portalSpinReverse 25s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'timeline-scan': 'timelineScan 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        portalSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        portalSpinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(53, 217, 139, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 35px rgba(53, 217, 139, 0.6))' },
        },
        timelineScan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(53, 217, 139, 0.25)',
        'emerald-lg': '0 0 50px -10px rgba(53, 217, 139, 0.4)',
        'gold-glow': '0 0 25px -5px rgba(200, 169, 81, 0.3)',
      }
    },
  },
  plugins: [],
}
