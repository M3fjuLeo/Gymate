import Button from '../../ui/Button';

function Hero() {
  return (
    <section className="hero-section">
      <div className="relative flex h-full w-full">
        <div className="absolute right-[20rem] top-[50%] flex translate-y-[-50%] flex-col gap-6 min800:right-[10rem] min800:items-center min800:text-center min540:right-[3rem]">
          <div>
            <p className="absolute z-10 pl-10 pt-2 uppercase text-black">
              find your energy
            </p>
            <img
              src="public/images/features/title-bg.svg"
              alt="text-bg"
              className="relative w-[55%] brightness-0 invert min800:w-[15rem]"
            />
          </div>
          <h1 className="text-5xl font-extrabold uppercase leading-relaxed text-white ">
            make your body <br />{' '}
            <span className="font-thin">fit & perfect</span>
          </h1>
          <Button
            to={'/classes'}
            cN={'white-cta'}
            description={'our classes'}
            textColor={'text-black'}
            arrowColor={'text-red-500'}
            bgColor={'bg-white'}
          />
        </div>
        <div className="absolute right-0 top-2/4 flex rotate-90 items-center gap-4 text-xl font-bold text-white min800:hidden ">
          <p className="uppercase tracking-widest">share</p>
          <span className="h-[0.15rem] w-10 bg-red-500"></span>
          <div className="flex gap-4">
            <i className="fa-brands fa-facebook -rotate-90 cursor-pointer duration-300 hover:text-red-500"></i>
            <a href="https://github.com/M3fjuLeo?tab=repositories">
              <i className="fa-brands fa-github -rotate-90 cursor-pointer duration-300 hover:text-red-500"></i>
            </a>
            <i className="fa-brands fa-linkedin-in -rotate-90 cursor-pointer duration-300 hover:text-red-500"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
