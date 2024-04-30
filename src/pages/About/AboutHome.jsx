import AboutMain from './AboutMain';
import AboutTiles from './AboutTiles';

function About() {
  return (
    <section className="bg-aboutBgImage flex flex-col bg-cover bg-center">
      <AboutTiles />
      <AboutMain />
    </section>
  );
}

export default About;
