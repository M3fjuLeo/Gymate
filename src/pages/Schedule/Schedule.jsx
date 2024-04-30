import { useState } from 'react';
import ClassSchedule from '../../ui/ClassSchedule';
import PageHeading from '../../ui/PageHeading';
import ScheduleNav from './ScheduleNav';

const scheduleData = {
  monday: [
    {
      className: 'Fitness',
      time: '9:00am - 10:00am',
      trainer: 'David Vila',
    },
    {
      className: 'Body Toning',
      time: '6:00pm - 7:00pm',
      trainer: 'John Weights',
    },
    {
      className: 'Body Building',
      time: '10:00pm - 11:00pm',
      trainer: 'John Weights',
    },
  ],
  tuesday: [
    {
      className: 'Running',
      time: '4:00pm - 5:00pm',
      trainer: 'Junifor Jonas',
    },
    {
      className: 'Yoga',
      time: '6:00pm - 7:00pm',
      trainer: 'Anna Smith',
    },
  ],
  wednesday: [
    {
      className: 'Cycling',
      time: '6:00am - 7:00am',
      trainer: 'Robert Louis',
    },
    {
      className: 'Boxing',
      time: '5:00pm - 6:00pm',
      trainer: 'Mike Tyson',
    },
    {
      className: 'Body Toning',
      time: '6:00pm - 7:00pm',
      trainer: 'John Weights',
    },
  ],
  thursday: [
    {
      className: 'Pilates',
      time: '8:00am - 9:00am',
      trainer: 'Laura Green',
    },
    {
      className: 'Body Toning',
      time: '5:00pm - 6:00pm',
      trainer: 'John Weights',
    },
  ],
  friday: [
    {
      className: 'Yoga',
      time: '6:00pm - 7:00pm',
      trainer: 'Anna Smith',
    },

    {
      className: 'Kickboxing',
      time: '7:00am - 8:00am',
      trainer: 'Frank Black',
    },
  ],
  saturday: [
    {
      className: 'Zumba',
      time: '10:00am - 11:00am',
      trainer: 'Maria Garcia',
    },
    {
      className: 'Running',
      time: '4:00pm - 5:00pm',
      trainer: 'Junifor Jonas',
    },
    {
      className: 'Body Toning',
      time: '6:00pm - 7:00pm',
      trainer: 'John Weights',
    },
  ],
  sunday: [
    {
      className: 'Fitness',
      time: '9:00am - 10:00am',
      trainer: 'David Vila',
    },
    {
      className: 'Yoga',
      time: '11:00am - 12:00pm',
      trainer: 'Anna Smith',
    },
    {
      className: 'Pilates',
      time: '2:00pm - 3:00pm',
      trainer: 'Laura Green',
    },
    {
      className: 'Body Toning',
      time: '6:00pm - 7:00pm',
      trainer: 'John Weights',
    },
  ],
};

function Schedule() {
  const [activeDay, setActiveDay] = useState('monday');

  return (
    <section id="schedule">
      <div className="flex flex-col items-center">
        <PageHeading title={'Schedule by Day'} />
        <ScheduleNav activeDay={activeDay} setActiveDay={setActiveDay} />
        <div className="page-padding container flex flex-col gap-2">
          {scheduleData[activeDay].map((classItem, index) => (
            <ClassSchedule
              key={index}
              className={classItem.className}
              time={classItem.time}
              trainer={classItem.trainer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
