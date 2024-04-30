import TrainersBox from './TrainersBox';
import Title from '../../ui/Title';

function Trainers() {
  return (
    <section className="bg-trainersBg page-padding bg-cover bg-center">
      <div className="container flex items-center justify-center py-28">
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-[60%] flex-col items-center gap-4 text-center">
            <Title title="gym trainers" />
            <h2 className="text-4xl font-bold">Team Of Expert Coaches</h2>
            <p className="text-stone-600">
              Expert team of coaches helps you succeed in any goal, personalized
              guidance and motivation provided!
            </p>
          </div>
          <TrainersBox />
        </div>
      </div>
    </section>
  );
}

export default Trainers;
