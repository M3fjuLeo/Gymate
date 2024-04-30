function ContactTile({ children, title }) {
  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="mb-4 h-[4px] w-[4rem] bg-red-500"></div>
      <div className="flex flex-row gap-4">{children}</div>
    </div>
  );
}

export default ContactTile;
