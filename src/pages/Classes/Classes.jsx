import PageHeading from '../../ui/PageHeading';
import ClassTile from './ClassTile';
import cyclingImg from '../../../public/images/classesImg/cycling.jpg';
import meditationImg from '../../../public/images/classesImg/meditation.jpg';
import boxImg from '../../../public/images/classesImg/box.jpg';
import karateImg from '../../../public/images/classesImg/karate.jpg';
import powerLiftingImg from '../../../public/images/classesImg/powerlifting.jpg';
import workoutImg from '../../../public/images/classesImg/workout.jpg';
import crossImg from '../../../public/images/classesImg/cross.jpg';
import runningImg from '../../../public/images/classesImg/running.jpg';
import bodybuildingImg from '../../../public/images/classesImg/bodybuilding.jpg';
import mmaImg from '../../../public/images/classesImg/mma.jpg';
import yogaImg from '../../../public/images/classesImg/yoga.jpg';
import fitnessImg from '../../../public/images/classesImg/fitness.jpg';

const classesData = [
  {
    id: 1,
    title: 'Cycling',
    time: 'Wed: 9:00am',
    trainer: 'David Vila',
    img: cyclingImg,
  },
  {
    id: 2,
    title: 'Meditation',
    time: 'Fri: 1:00pm',
    trainer: 'John Weights',
    img: meditationImg,
  },
  {
    id: 3,
    title: 'Boxing',
    time: 'Tue: 4:00pm',
    trainer: 'Junifor Jonas',
    img: boxImg,
  },
  {
    id: 4,
    title: 'Karate',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: karateImg,
  },
  {
    id: 5,
    title: 'Power Lifting',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: powerLiftingImg,
  },
  {
    id: 6,
    title: 'Workout',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: workoutImg,
  },
  {
    id: 7,
    title: 'Crossfit',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: crossImg,
  },
  {
    id: 8,
    title: 'Running',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: runningImg,
  },
  {
    id: 9,
    title: 'Body Building',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: bodybuildingImg,
  },
  {
    id: 10,
    title: 'Mma',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: mmaImg,
  },
  {
    id: 11,
    title: 'Yoga',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: yogaImg,
  },
  {
    id: 12,
    title: 'Fitness',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: fitnessImg,
  },
];

function Classes() {
  return (
    <section id="classes" className="bg-aboutBgImage">
      <PageHeading title="Classes" />
      <div className="page-padding container pb-20 pt-20">
        <div className="grid grid-cols-3 gap-6 md1000:grid-cols-2 min620:grid-cols-1">
          {classesData.map((classData) => (
            <ClassTile
              key={classData.id}
              img={classData.img}
              title={classData.title}
              trainer={classData.trainer}
              time={classData.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;
