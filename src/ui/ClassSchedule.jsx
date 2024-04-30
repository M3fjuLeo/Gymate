function ClassSchedule({ className, time, trainer }) {
  return (
    <div className="flex flex-row justify-between bg-neutral-100 px-14 py-6 md1200:flex-col md1200:items-center md1200:gap-3">
      <div className="flex flex-col">
        <span className="text-neutral-400">Class Name</span>
        <h2 className="text-xl font-bold">{className}</h2>
      </div>
      <div className="text-center">
        <span className="text-neutral-400">Time</span>
        <h2 className="text-xl font-bold">{time}</h2>
      </div>
      <div className="text-center">
        <span className="text-neutral-400">Trainer</span>
        <h2 className="text-xl font-bold">{trainer}</h2>
      </div>
      <button className="rounded-full border bg-neutral-800 px-8 py-2 font-bold text-white duration-300 hover:bg-red-500">
        Join Now
      </button>
    </div>
  );
}

export default ClassSchedule;
