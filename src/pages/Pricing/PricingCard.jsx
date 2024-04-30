import Button from '../../ui/Button';

function PricingCard({ img, level, price }) {
  return (
    <div className="z-50 bg-white pb-10 shadow-xl">
      <div className="relative flex flex-col items-center grayscale duration-300 hover:text-red-500 hover:grayscale-0">
        <img className="w-[25rem]" src={img} alt="beginner plan photo" />
        <h2 className="absolute -bottom-2 bg-white px-16 py-3 text-xl font-bold tracking-wider">
          {level}
        </h2>
      </div>
      <div className="mb-4 flex flex-col gap-6 bg-white py-8 tracking-wider">
        <h1 className="text-5xl font-bold">
          <sup className="text-3xl font-thin text-neutral-600">$</sup> {price}{' '}
          <span className="text-3xl font-thin text-neutral-600">p/m</span>
        </h1>
        <p className="text-neutral-600">Free Hand</p>
        <p className="text-neutral-600">Gym Fitness</p>
        <p className="text-neutral-600">Weight Loss</p>
        <p className="text-neutral-600">Personal Trainer</p>
        <p className="text-neutral-600">Cycling</p>
      </div>
      <Button
        to={'/contact'}
        cN={'red-cta'}
        description={'purchase now'}
        bgColor={'bg-red-500'}
        textColor={'text-white'}
      />
    </div>
  );
}

export default PricingCard;
