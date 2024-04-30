function AboutGymBox({ title, style, img }) {
  return (
    <div className="py-12">
      <div className={`flex flex-col ${style} items-center gap-4 px-8`}>
        <img className="w-16" src={img} />
        <h2 className="w-36 text-center text-xl font-bold uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default AboutGymBox;
