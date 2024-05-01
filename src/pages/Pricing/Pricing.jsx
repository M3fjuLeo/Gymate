import Title from '../../ui/Title';
import PricingCard from './PricingCard';
import Img1 from '../../../public/images/pricing/img1.jpg';
import Img2 from '../../../public/images/pricing/img2.jpg';
import Img3 from '../../../public/images/pricing/img3.jpg';
import bgText from '../../../public/images/pricing/bg-text.png';
import bgDumbell from '../../../public/images/pricing/bg-dumbell.png';

function Pricing() {
  return (
    <section id="pricing" className="pricingSection relative">
      <img
        className="absolute left-10 top-10"
        src={bgText}
        alt="dumbells image"
      />
      <img
        className="absolute bottom-10 right-10"
        src={bgDumbell}
        alt="no days off"
      />
      <div className="page-padding z-100 container  py-28 text-center">
        <div className="flex flex-col items-center gap-10">
          <div className="textcenter flex w-[50%] flex-col items-center gap-6">
            <Title title={'pricing chart'} />
            <h1 className="text-4xl font-bold">Exclusive Pricing Plan</h1>
            <p className="text-lg text-neutral-600">
              Gymat an unknown printer took a galley of type and scrambled make
              a type specimen book.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-8 text-center md1200:flex-wrap">
            <PricingCard img={Img1} level={'Beginner'} price="39" />
            <PricingCard img={Img2} level={'Premium'} price="69" />
            <PricingCard img={Img3} level={'Vip'} price="99" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
