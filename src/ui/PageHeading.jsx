function PageHeading({ title }) {
  return (
    <div className="pageHeadingBg flex h-[28rem] w-full flex-col items-center justify-end bg-cover bg-center pb-10 md1200:h-[12rem]">
      <h1 className=" text-4xl font-bold text-white">{title}</h1>
    </div>
  );
}

export default PageHeading;
