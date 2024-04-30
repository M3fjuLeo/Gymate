function SidebarSectionBox({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-black">{title}</h3>
      {children}
    </div>
  );
}

export default SidebarSectionBox;
