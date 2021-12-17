module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.11ty.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        amarillo: '#FFDE21',
        negro: '#2B3701',
      },
    },
  },
  plugins: [],
}
