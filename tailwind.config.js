/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/twclasses/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: 'var(--display-font)',
      body: 'var(--body-font)',
    },
    colors: ({ colors }) => ({
      ...colors,
      white: '#EDF2FA',
      body: '#A5ABB4',
      black: '#1E1E1E',
    }),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'marquee-ltr': 'marquee-ltr 50s linear infinite alternate',
        'marquee-rtl': 'marquee-rtl 50s linear infinite alternate',
      },
      keyframes: {
        'marquee-rtl': {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
