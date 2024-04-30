function PageHeading({ title }) {
  return (
    <div className="bg-pageHeadingBgImage flex h-[28rem] w-full flex-col items-center justify-end bg-cover bg-center pb-10">
      <h1 className=" text-4xl font-bold text-white">{title}</h1>
    </div>
  );
}

export default PageHeading;
