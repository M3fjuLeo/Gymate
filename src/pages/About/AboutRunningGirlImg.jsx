import girlImg from '../../../public/images/who-we-are/girl-run.png';
import bgImg from '../../../public/images/who-we-are/girl-redbg.svg';
import textImg from '../../../public/images/who-we-are/girl-side-text.png';
import windImg from '../../../public/images/who-we-are/wind.png';

function AboutRunningGirlImg() {
  return (
    <div className="relative flex w-full items-center md1000:hidden">
      <img className="absolute z-50" src={girlImg} />
      <img className="absolute right-[22%] w-[40%]" src={bgImg} />
      <img className="absolute w-[17%]" src={textImg} />
      <img className="absolute left-[55%] top-60 z-40 w-14" src={windImg} />
    </div>
  );
}

export default AboutRunningGirlImg;
