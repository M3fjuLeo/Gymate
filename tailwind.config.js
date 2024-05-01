/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md1200: { max: '1200px' },
      md1000: { max: '1000px' },
      min800: { max: '800px' },
      min620: { max: '620px' },
      min540: { max: '540px' },
      min450: { max: '450px' },
      min375: { max: '375px' },
    },
    backgroundImage: {
      BlogDiscountBanner: "url('public/pages/Blog/blog/sidebar1.png')",
    },
    extend: {
      backgroundImage: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
