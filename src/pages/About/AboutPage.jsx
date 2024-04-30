import PageHeading from '../../ui/PageHeading';
import AboutMain from './AboutMain';

function AboutPage() {
  return (
    <section id="about" className="flex flex-col">
      <PageHeading title={'About Us'} />
      <AboutMain />
      <div className="page-padding container grid grid-cols-2 grid-rows-2 pb-20 min620:grid-cols-1 ">
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-24 text-center md1000:p-14 min800:p-10">
          <img
            src="public/images/AboutPage/target.png"
            alt="target image"
            className="w-24"
          />
          <h2 className="text-4xl font-bold">Our History</h2>
          <p className="text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
        <div className="bg-about1 bg-cover bg-center"></div>
        <div className="bg-about2 bg-cover bg-center"></div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-24 text-center md1000:p-14 min800:p-10">
          <img
            src="public/images/AboutPage/mountain.png"
            alt="target image"
            className="w-24"
          />
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
