import PageHeading from '../../ui/PageHeading';
import ClassTile from './ClassTile';

const classesData = [
  {
    id: 1,
    title: 'Cycling',
    time: 'Wed: 9:00am',
    trainer: 'David Vila',
    img: 'public/images/classesImg/cycling.jpg',
  },
  {
    id: 2,
    title: 'Meditation',
    time: 'Fri: 1:00pm',
    trainer: 'John Weights',
    img: 'public/images/classesImg/meditation.jpg',
  },
  {
    id: 3,
    title: 'Boxing',
    time: 'Tue: 4:00pm',
    trainer: 'Junifor Jonas',
    img: 'public/images/classesImg/box.jpg',
  },
  {
    id: 4,
    title: 'Karate',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/karate.jpg',
  },
  {
    id: 5,
    title: 'Power Lifting',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/powerlifting.jpg',
  },
  {
    id: 6,
    title: 'Workout',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/workout.jpg',
  },
  {
    id: 7,
    title: 'Crossfit',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/cross.jpg',
  },
  {
    id: 8,
    title: 'Running',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/running.jpg',
  },
  {
    id: 9,
    title: 'Body Building',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/bodybuilding.jpg',
  },
  {
    id: 10,
    title: 'Mma',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/mma.jpg',
  },
  {
    id: 11,
    title: 'Yoga',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/yoga.jpg',
  },
  {
    id: 12,
    title: 'Fitness',
    time: 'Sat: 9:00am',
    trainer: 'Robert Louis',
    img: 'public/images/classesImg/fitness.jpg',
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
