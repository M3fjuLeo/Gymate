import Button from '../../ui/Button';

function BlogBox({ img, title, date, description, label }) {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <img src={img} />
      <div className="flex flex-row items-center gap-2 text-neutral-600">
        <i className="fa-solid fa-layer-group text-red-500"></i>
        <h3>
          By <span className="font-bold">Admin</span>
        </h3>
        <p className="border-x-2 border-neutral-500 px-2">{date}</p>
        <p>{label}</p>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mb-8 text-lg text-neutral-600">{description}</p>
      <Button
        description={'Reade more'}
        cN={'red-cta'}
        bgColor={'bg-red-500'}
        textColor={'text-white'}
      />
    </div>
  );
}

export default BlogBox;
