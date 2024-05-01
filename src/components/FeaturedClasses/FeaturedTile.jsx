function FeaturedTile({ title, description, span, bgImg }) {
  return (
    <div className={`relative col-span-${span} h-[20rem] overflow-hidden`}>
      <div className={`absolute h-full w-full bg-center p-6  `}></div>
      <img
        src={bgImg}
        className="cursor-pointer grayscale duration-300 hover:scale-[1.2] hover:grayscale-0"
      />
      <div className="absolute bottom-0 flex flex-col gap-2 p-6">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="max-w-max bg-red-500 px-2 py-1 text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeaturedTile;
