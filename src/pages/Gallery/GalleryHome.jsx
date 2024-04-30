import Title from '../../ui/Title';

function GalleryHome() {
  return (
    <section className="relative" id="gallery home">
      <img
        className="absolute right-0 top-20"
        src="src/pages/Gallery/gallery/bg-icon.png"
        alt=""
      />
      <div className="page-padding container py-32">
        <div className="flex flex-col items-center gap-12">
          <div className="flex w-[60%] flex-col items-center gap-6 text-center">
            <Title title="gymate gallery" width={'w-[15rem]'} />
            <h1 className="text-3xl font-bold">Our Workplace Gallery</h1>
            <p className="text-neutral-500">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture. Attracts talents and showcases company's work
              atmosphere.
            </p>
          </div>
          <div className="grid h-[40rem] w-full grid-cols-4 grid-rows-3 gap-2">
            <div className="bg-galleryHomeImg1 col-span-2 row-span-2 bg-cover bg-center"></div>
            <div className="bg-galleryHomeImg2 col-span-2 bg-cover bg-center"></div>
            <div className="bg-galleryHomeImg5 col-span-2 row-span-2 bg-cover bg-center"></div>
            <div className="bg-galleryHomeImg3 bg-cover bg-center"></div>
            <div className="bg-galleryHomeImg4 bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
