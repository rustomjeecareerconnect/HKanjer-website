/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E2421', // Soft Charcoal Sage (Gentle Dark)
          light: '#FAF8F5',   // Soft Warm Sand / Linen (Light Base)
        },
        secondary: {
          DEFAULT: '#27302C', // Soft Pine Charcoal
          light: '#F2EDE4',   // Warm Oat Sand (Light Alt Section)
        },
        accent: {
          DEFAULT: '#C28E2E', // Rich Warm Bronze Gold
          warm: '#C87D55',    // Soft Terracotta Clay
          hover: '#A07408',
        },
        surface: {
          DEFAULT: '#2E3833', // Muted Dark Card
          light: '#FFFFFF',   // Crisp White Card
        },
        text: {
          DEFAULT: '#F5F3EF', // Soft Off-White
          muted: '#ADB8AF',   // Muted Soft Sage
          dark: '#2A261F',    // Deep Espresso Slate
          'dark-muted': '#6E6659', // Warm Muted Taupe
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(194, 142, 46, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(194, 142, 46, 0.35)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #C28E2E 0%, #C87D55 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1E2421 0%, #27302C 100%)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.dark'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.accent.hover'),
              },
            },
            h1: { fontFamily: theme('fontFamily.heading').join(', ') },
            h2: { fontFamily: theme('fontFamily.heading').join(', ') },
            h3: { fontFamily: theme('fontFamily.heading').join(', ') },
            h4: { fontFamily: theme('fontFamily.heading').join(', ') },
          },
        },
        invert: {
          css: {
            color: theme('colors.text.DEFAULT'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
