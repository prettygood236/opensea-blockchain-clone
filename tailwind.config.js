module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'headerItems-rgba': 'rgba(4, 17, 29, 0.75)',
        'headerItems-hover-rgba': 'rgba(4, 17, 29, 1)',
      },
    },
  },
  plugins: [],
};
