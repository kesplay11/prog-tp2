// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss7-compat': {
      purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      darkMode: false,
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {}
  }
}