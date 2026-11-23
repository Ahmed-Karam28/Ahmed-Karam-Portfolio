/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0B0B0C',
        panel: '#121214',
        paper: '#F2F0EA',
        muted: '#9C9A94',
        faint: '#92908B',
        gold: '#C9A96A',
        goldbright: '#E3C98F',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      animation: {
        'marquee': 'marquee 42s linear infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
