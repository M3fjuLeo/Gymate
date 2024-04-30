function BlogTileContainer({ children, title }) {
  return (
    <div className="flex flex-col gap-4 bg-neutral-50 px-6 py-8">
      <div className="">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <div className="mb-4 h-[4px] w-[3rem] bg-red-500"></div>
      </div>
      {children}
    </div>
  );
}

export default BlogTileContainer;
