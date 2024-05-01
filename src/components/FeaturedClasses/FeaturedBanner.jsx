import Button from '../../ui/Button';
import featuredBgBanner from '../../../public/images/features/cta-bg.png';

function FeaturedBanner() {
  return (
    <div className="featuredBgBanner flex h-[12rem] w-full items-center justify-start bg-cover bg-center md1200:!bg-red-500 md1200:bg-none">
      <div className="page-padding container">
        <div className="flex items-center gap-20 md1200:flex-col md1200:gap-8 md1200:text-center">
          <h2 className="max-w-xl text-4xl font-bold text-white">
            We Are Always Providing Best Fitness Service For You
          </h2>
          <Button
            cN={'white-cta'}
            bgColor={'bg-white'}
            textColor={'text-black'}
            description={'join with us'}
            arrowColor={'text-red-500'}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedBanner;
