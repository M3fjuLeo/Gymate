function AboutTile({ title, description, img }) {
  return (
    <div
      className={`hover:bg-aboutTileBgImage flex cursor-pointer flex-col items-center justify-center rounded-br-[35px] rounded-tl-[35px] bg-white px-10 py-16 text-center shadow-2xl duration-300 hover:text-white`}
    >
      <img className="mb-4" src={img} alt="progression image" />
      <h2 className="mb-6 text-2xl font-bold uppercase">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default AboutTile;
