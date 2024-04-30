import Button from '../../ui/Button';
import ChooseUsBox from './ChooseUsBox';
import Title from './../../ui/Title';

function ChooseUs() {
  return (
    <section className="bg-chooseUsBgImage page-padding">
      <div className="container flex flex-row gap-24 py-28 md1000:flex-col md1000:items-center">
        <div className="relative">
          <img
            className="w-[90rem] md1000:w-[45rem] "
            src="src/images/choose-us/main-img.png"
            alt="choose us image"
          />
          <span className="absolute left-[50%] top-[45%] w-16 -translate-x-2/4 -translate-y-2/4 cursor-pointer rounded-full bg-white p-4">
            <img
              className="relative left-1 md1000:block"
              src="src/images/choose-us/play.png"
              alt="plaay image"
            />
          </span>
        </div>
        <div className="flex flex-col gap-8 text-white md1000:items-center md1000:px-40 md1000:text-center min800:px-14 min620:px-8 min540:px-0">
          <Title title="Why Choose us?" width="w-60" />
          <h2 className="text-4xl font-bold">
            We Can Give A Shape Of Your Body Here!
          </h2>
          <p className="leading-6 tracking-wide text-[#b4b4b4]">
            At <span className="font-bold">Gymate</span>, we are dedicated to
            helping you achieve the body of your dreams. Our expert trainers and
            nutritionists will work with you to create a personalized fitness
            and nutrition plan that helps you reach your specific goals.
          </p>
          <div className="mb-8 grid grid-cols-2 grid-rows-2 gap-8 min540:flex min540:flex-col">
            <ChooseUsBox
              title="Free Fitness Training"
              icon="src/images/choose-us/training.png"
            />
            <ChooseUsBox
              title="Modern Gym Equipments"
              icon="src/images/choose-us/bench-press.png"
            />
            <ChooseUsBox
              title="Gym Bag Equipments"
              icon="src/images/choose-us/gym-bag.png"
            />
            <ChooseUsBox
              title="Fresh Bottle Watter"
              icon="src/images/choose-us/bottle-of-water.png"
            />
          </div>
          <Button
            description={'our classes'}
            textColor={'text-white'}
            to={'/classes'}
            bgColor={'bg-neutral-600'}
            cN={'gray-cta'}
            hoverBg={'hover:bg-red-500'}
          />
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
