import AboutTile from './AboutTile';

function AboutTiles() {
  return (
    <div className="page-padding container relative -top-16 flex flex-row gap-8 md1000:flex-col">
      <AboutTile
        title="progression"
        description="Our team of experts will work with you to create a customized plan that
        helps you achieve success one step at a time."
        img="src/images/who-we-are/progresion.png"
      />
      <AboutTile
        title="workout"
        description="With a variety of workouts to choose from, you'll have everything you
           need to get into the best shape of your life"
        img="src/images/who-we-are/workout.png"
      />
      <AboutTile
        title="nutritions"
        description="Our team will work with you to create a personalized meal plan that
        helps you reach your specific health goals."
        img="src/images/who-we-are/nutritions.png"
      />
    </div>
  );
}

export default AboutTiles;
