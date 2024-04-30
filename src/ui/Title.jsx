function Title({ title, width }) {
  return (
    <div className="flex items-center justify-center">
      <img
        className={`absolute ${width}`}
        src="src/images/features/title-bg.svg"
        alt="title background image"
      />
      <h3 className="relative z-10 font-bold uppercase text-white">{title}</h3>
    </div>
  );
}

export default Title;
