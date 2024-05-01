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
      about1: "url('public/images/AboutPage/3.jpg')",
      about2: "url('public/images/AboutPage/4.jpg')",
      pageHeadingBgImage: "url('public/images/login/banner.jpg')",
      aboutTileBgImage: "url('public/images/who-we-are/info-card-bg.jpg')",
      aboutBgImage: "url('public/images/pricing/background.jpg')",
      galleryHomeImg1: "url('public/images/gallery/img1.jpg')",
      galleryHomeImg2: "url('public/images/gallery/img2.jpg')",
      galleryHomeImg3: "url('public/images/gallery/img3.jpg')",
      galleryHomeImg4: "url('public/images/gallery/img4.jpg')",
      galleryHomeImg5: "url('public/images/gallery/img5.jpg')",
      CallBg: "url('public/images/callBackground.jpg')",
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
