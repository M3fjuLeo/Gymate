import Button from '../../ui/Button';
import AboutRunningGirlImg from './AboutRunningGirlImg';
import Title from './../../ui/Title';
import AboutGymBox from './AboutGymBox';

function AboutMain() {
  return (
    <div className="page-padding container flex flex-row gap-8 pb-36 pt-20 md1000:text-center ">
      <div className="flex flex-col gap-8 md1000:items-center">
        <Title title="who we are" />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            Take Your Health And Body To Next Level
          </h1>
          <p className="text-lg text-gray-500">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex flex-row justify-center gap-2 min620:flex-col">
            <AboutGymBox
              title={`PROFESSIONAL TRAINERS`}
              img="public/images/features/workout-red.png"
            />
            <AboutGymBox
              title="modern equipments"
              img="public/images/who-we-are/equpments.png"
              style="border-x-2"
            />
            <AboutGymBox
              title="fancy gym machines"
              img="public/images/who-we-are/gym.png"
            />
          </div>
        </div>
        <Button
          to={'/classes'}
          cN={'gray-cta'}
          bgColor={'bg-gray-800'}
          textColor={'text-white'}
          description={'take a tour'}
          hoverBg={'hover:bg-red-500'}
        />
      </div>
      <AboutRunningGirlImg />
    </div>
  );
}

export default AboutMain;
