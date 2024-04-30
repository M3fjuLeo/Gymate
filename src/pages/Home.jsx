import Bmi from '../components/BMI/Bmi';
import CallBanner from '../components/CallBanner/CallBanner';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import FeaturedBanner from '../components/FeaturedClasses/FeaturedBanner';
import FeaturedClasses from '../components/FeaturedClasses/FeaturedClasses';
import Hero from '../components/Hero/Hero';
import Testimonials from '../components/Testimonials/Testimonials';
import Trainers from '../components/Trainers/Trainers';
import AboutHome from './About/AboutHome';
import LatestBlog from './Blog/LatestBlog';
import GalleryHome from './Gallery/GalleryHome';
import Pricing from './Pricing/Pricing';

function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <FeaturedClasses />
      <FeaturedBanner />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <GalleryHome />
      <Bmi />
      <Pricing />
      <LatestBlog />
      <CallBanner />
    </>
  );
}

export default Home;
