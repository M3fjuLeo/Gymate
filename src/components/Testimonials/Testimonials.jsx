import Title from '../../ui/Title';
import TestimonialsBox from './TestimonialsBox';
import Logo1 from '../../../public/images/TestimonialsImg/logo1.png';
import Logo2 from '../../../public/images/TestimonialsImg/logo2.png';
import Logo3 from '../../../public/images/TestimonialsImg/logo3.png';
import Logo4 from '../../../public/images/TestimonialsImg/logo4.png';
import Logo5 from '../../../public/images/TestimonialsImg/logo5.png';
import trainerImg from '../../../public/images/TestimonialsImg/testimonial-new.jpg';

function Testimonials() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

  return (
    <section id="testimonials" className="border-b-[1px]">
      <div className="page-padding lg:gap-20 container flex flex-col py-20 ">
        <Title title={'testimonials'} />
        <div className="mt-32 border-[10px] border-solid p-6">
          <div className="lg:pb-0 relative flex flex-row bg-black pb-20">
            <div className="relative w-[44rem] md1200:hidden">
              <img
                className="absolute bottom-0 h-[30rem] w-[25rem] rounded-tr-[12rem]"
                src={trainerImg}
                alt="trainer photo"
              />
            </div>
            <TestimonialsBox />
            <div className="absolute bottom-6 right-6 flex flex-row gap-4">
              <i className="fa-solid fa-arrow-left cursor-pointer bg-white px-4 py-2 text-xl duration-300 hover:bg-red-500 hover:text-white"></i>
              <i className="fa-solid fa-arrow-right cursor-pointer bg-white px-4 py-2 text-xl duration-300 hover:bg-red-500 hover:text-white"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-12">
          {logos.map((logo, id) => (
            <img
              key={id}
              className="w-40 duration-300 hover:invert"
              src={logo}
              alt="sponsor banner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
