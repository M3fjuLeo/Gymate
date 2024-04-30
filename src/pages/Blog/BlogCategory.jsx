function BlogCategory({ title, quantity }) {
  return (
    <div className="flex cursor-pointer flex-row justify-between border-b pb-2 text-neutral-500 duration-300 hover:text-red-500">
      <div className="flex flex-row items-center gap-2">
        <i className="fa-solid fa-chevron-right"></i>
        <h3 className="text-lg font-thin">{title}</h3>
      </div>
      <p className="text-lg">({quantity})</p>
    </div>
  );
}

export default BlogCategory;
