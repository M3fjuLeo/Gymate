import Button from '../../ui/Button';
import meditationImg from '../../../public/images/classesImg/meditation.jpg';

function ClassTile({ img, title, trainer, time }) {
  return (
    <div
      className={`relative flex h-[30rem] flex-col rounded-2xl bg-cover bg-center shadow-xl`}
      style={{ backgroundImage: img }}
    >
      <div className="absolute left-0 top-0 z-20 h-full w-full rounded-2xl bg-[#0000002a]">
        <div className="absolute bottom-10 left-10">
          <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
          <div className="mb-4 h-[4px] w-[4rem] bg-red-500"></div>
          <div className="mb-8 flex flex-row gap-6 text-white">
            <div className="flex flex-row items-center gap-2">
              <i className="fa-regular fa-user"></i>
              <p className="text-white">{trainer}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              <p>{time}</p>
            </div>
          </div>
          <Button
            bgColor="bg-white"
            textColor="text-black"
            description="Join now"
            cN="white-cta"
            arrowColor="text-red-500"
          />
        </div>
      </div>
    </div>
  );
}

export default ClassTile;
