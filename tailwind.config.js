/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a237e',
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
        },
        gold: {
          DEFAULT: '#ffd700',
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#ffdb66',
          400: '#ffcf33',
          500: '#ffc300',
          600: '#e6b000',
          700: '#cc9c00',
          800: '#b38800',
          900: '#996600',
        }
      },
      boxShadow: {
        'soft-xs': '0 2px 4px rgba(0,0,0,0.05)',
        'soft-sm': '0 2px 8px rgba(0,0,0,0.1)',
        'soft': '0 4px 12px rgba(0,0,0,0.1)',
        'soft-md': '0 6px 16px rgba(0,0,0,0.1)',
        'soft-lg': '0 8px 24px rgba(0,0,0,0.1)',
        'soft-xl': '0 12px 32px rgba(0,0,0,0.1)',
        'soft-2xl': '0 16px 48px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'fade-left': 'fadeLeft 0.6s ease-out forwards',
        'fade-right': 'fadeRight 0.6s ease-out forwards',
        'scale-up': 'scaleUp 0.6s ease-out forwards',
        'bounce-light': 'bounceLight 2s infinite',
        'slide-down': 'slideDown 1.5s ease-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        scaleUp: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '800': '800ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};