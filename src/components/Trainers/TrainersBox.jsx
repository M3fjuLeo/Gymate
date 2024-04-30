import Trainer1 from '../../../public/images/trainers/trainer1.png';
import Trainer2 from '../../../public/images/trainers/trainer2.png';
import Trainer3 from '../../../public/images/trainers/trainer3.png';
import TrainerBg from '../../../public/images/trainers/trainer-bg.png';
import Shape from '../../../public/images/trainers/shape.png';

function TrainersBox() {
  const trainers = [
    { img: Trainer1, name: 'John Lewis', job: 'Yoga Trainer' },
    { img: Trainer2, name: 'Jonathan Doe', job: 'Crossfit Trainer' },
    { img: Trainer3, name: 'Ana June', job: 'Personal Trainer' },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-8 md1200:flex-wrap">
      {trainers.map((trainer, id) => (
        <div
          key={id}
          className="flex w-[23rem] cursor-pointer flex-col items-center justify-center"
        >
          <img
            className="absolute z-10 w-[15rem] grayscale duration-300 hover:grayscale-0"
            src={trainer.img}
            alt="trainer photo"
          />
          <img
            className="relative top-12"
            src={TrainerBg}
            alt="trainer background photo"
          />
          <div className="trainerBox relative z-50 flex w-full flex-col items-center justify-center gap-2 rounded bg-white py-8 shadow-lg">
            <img className="absolute -top-6 z-20 " src={Shape} alt="shape" />
            <i className="fa-solid fa-angle-up absolute -top-4 z-30 text-xl"></i>
            <h3 className="text-2xl font-bold">{trainer.name}</h3>
            <p className="text-stone-600">{trainer.job}</p>
            <div className="flex flex-row gap-4 text-stone-600">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrainersBox;
