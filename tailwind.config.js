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
        space: {
          black: '#030303',
          darker: '#08080a',
          dark: '#0f0f13',
          card: 'rgba(15, 15, 20, 0.6)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        nebula: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          purple: '#7f00ff',
          pink: '#e100ff',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'drift-slow': 'driftSlow 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: 0.6,
            filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.3))'
          },
          '50%': {
            opacity: 1,
            filter: 'drop-shadow(0 0 30px rgba(127, 0, 255, 0.6))'
          },
        },
        driftSlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at 50% 50%, #0d0b14 0%, #030303 100%)',
        'nebula-gradient': 'linear-gradient(to right, #00f2fe 0%, #4facfe 100%)',
        'purple-gradient': 'linear-gradient(to right, #7f00ff 0%, #e100ff 100%)',
      }
    },
  },
  plugins: [],
}
