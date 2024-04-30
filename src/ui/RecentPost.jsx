function RecentPost({ img, date, title }) {
  return (
    <div className="flex flex-row gap-2">
      <img className="h-20" src={img} />
      <div>
        <h3 className="text-neutral-500">{date}</h3>
        <h2 className="font-bold">{title}</h2>
      </div>
    </div>
  );
}

export default RecentPost;
