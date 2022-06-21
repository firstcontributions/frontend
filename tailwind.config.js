module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#40444b',
          700: '#36393f',
          800: '#2f3136',
          900: '#202225',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
}
