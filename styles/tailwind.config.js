module.exports = {
    content: ['_site/**/*.html'],
    safelist: [],
    theme: {
      extend: {
        colors: {
          change: 'transparent',
        },
      },
    },
    plugins: [
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/aspect-ratio'),
    ],
  }