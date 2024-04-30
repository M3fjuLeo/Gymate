import { Link } from 'react-router-dom';

const DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

function ScheduleNav({ activeDay, setActiveDay }) {
  return (
    <div className="mb-12 mt-24 flex flex-row flex-wrap justify-center gap-3">
      {DAYS.map((day) => (
        <Link
          key={day}
          className={`rounded-full border px-8 py-2 text-lg font-bold ${activeDay === day ? 'bg-red-500 text-white' : ''}`}
          onClick={() => setActiveDay(day)}
        >
          {day.charAt(0).toUpperCase() + day.slice(1)}
        </Link>
      ))}
    </div>
  );
}

export default ScheduleNav;
