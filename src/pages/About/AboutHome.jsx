import AboutMain from './AboutMain';
import AboutTiles from './AboutTiles';
import bgImage from '../../../public/images/pricing/background.jpg';

function About() {
  return (
    <section className="about-section flex flex-col">
      <AboutTiles />
      <AboutMain />
    </section>
  );
}

export default About;
