import Button from '../../ui/Button';

function CallBanner() {
  const number = '+123-456789';

  return (
    <section id="call" className="CallBgBanner bg-cover bg-center">
      <div className="page-padding container flex flex-col gap-4 py-14">
        <h1 className="text-4xl font-bold text-white">
          Need a Fitness Trainer?
        </h1>
        <h2 className="mb-6 text-2xl font-bold text-white">
          <span className="text-red-500">Call: </span>
          {number}
        </h2>
        <div>
          <Button
            cN={'red-cta'}
            to={'/contact'}
            description={'purchase now'}
            bgColor={'bg-red-500'}
            textColor={'text-white'}
          />
        </div>
      </div>
    </section>
  );
}

export default CallBanner;
