import Button from '../../ui/Button';

function LatestBlogBox({ date, title, description }) {
  return (
    <div className="relative flex h-[25rem] w-full flex-col gap-6 px-6 py-16 shadow-xl">
      <span className="w-fit rounded-full border border-black px-4 py-1 font-bold">
        {date}
      </span>
      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
      <div className="absolute bottom-6">
        <Button
          to={'/blog'}
          description={'read more'}
          bgColor="bg-red-500"
          textColor={'text-white'}
        />
      </div>
    </div>
  );
}

export default LatestBlogBox;
