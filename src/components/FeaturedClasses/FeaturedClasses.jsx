import FeaturedTile from './FeaturedTile';

function FeaturedClasses() {
  return (
    <section className="container">
      <div className="page-padding flex flex-col items-center gap-10 py-20">
        <div>
          <img
            className="absolute w-[20rem]"
            src="src/images/features/title-bg.svg"
          />
          <h2 className="relative px-14 py-4 font-bold uppercase text-white">
            our feautered classes
          </h2>
        </div>
        <h1 className="text-4xl font-bold">
          We Are Offering Best Flexible Classes
        </h1>
        <div className="md:100 grid w-full grid-cols-4 grid-rows-2 gap-4 md1000:flex md1000:flex-col">
          <FeaturedTile
            title="Cycling"
            description="Wednesday: 9:00am-10:00am"
            bgImg="bg-featuredImg1"
            span={2}
          />
          <FeaturedTile
            title={'Karate'}
            description={'Friday: 10:00am-11:00am'}
            bgImg="bg-featuredImg2"
          />
          <FeaturedTile
            title={'Power'}
            description={'Saturday: 9:00am-10:00am'}
            bgImg="bg-featuredImg3"
          />
          <FeaturedTile
            title={'Meditation'}
            description={'Friday: 1:00pm-2:00pm'}
            bgImg="bg-featuredImg4"
          />
          <FeaturedTile
            title={'Martial Arts'}
            description={'Sunday: 6:00pm-7:00pm'}
            bgImg="bg-featuredImg5"
          />
          <FeaturedTile
            title={'Workout'}
            description={'Monday: 4:00pm-5:00pm'}
            bgImg="bg-featuredImg6"
            span={2}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedClasses;
