import PageHeading from '../../ui/PageHeading';
import AboutMain from './AboutMain';
import targetImg from '../../../public/images/AboutPage/target.png';
import mountainImg from '../../../public/images/AboutPage/mountain.png';
import RdlImg from '../../../public/images/AboutPage/3.jpg';
import GirlsImg from '../../../public/images/AboutPage/4.jpg';

function AboutPage() {
  return (
    <section id="about" className="flex flex-col">
      <PageHeading title={'About Us'} />
      <AboutMain />
      <div className="page-padding container grid grid-cols-2 grid-rows-2 pb-20 min620:grid-cols-1 ">
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-24 text-center md1000:p-14 min800:p-10">
          <img src={targetImg} alt="target image" className="w-24" />
          <h2 className="text-4xl font-bold">Our History</h2>
          <p className="text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
        <div className="relative">
          <img
            src={RdlImg}
            alt="Romanian dead lift"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative">
          <img
            src={GirlsImg}
            alt="Girls with balls"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-24 text-center md1000:p-14 min800:p-10">
          <img src={mountainImg} alt="target image" className="w-24" />
          <h2 className="text-4xl font-bold">Our History</h2>
          <p className="text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
