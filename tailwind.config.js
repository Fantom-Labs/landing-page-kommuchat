/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E63030',
          redHover: '#CC2020',
        },
        dark: {
          bg: '#0A0A0A',
          secondary: '#111111',
          card: '#161616',
          border: '#2A2A2A',
        },
        light: {
          bg: '#F9F9F9',
          secondary: '#F2F0ED',
          card: '#FFFFFF',
          border: '#E8E4DF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'red-glow': '0 8px 30px rgba(230, 48, 48, 0.35)',
        'red-glow-lg': '0 16px 48px rgba(230, 48, 48, 0.15)',
        'cta-glow': '0 -16px 128px 0 rgba(230, 48, 48, 0.25) inset, 0 -16px 32px 0 rgba(230, 48, 48, 0.4) inset',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
