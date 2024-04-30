function ChooseUsBox({ title, icon }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <img
        className="w-20 rounded-full bg-neutral-800 p-3 duration-300 hover:bg-red-500"
        src={icon}
        alt="icon"
      />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}

export default ChooseUsBox;
