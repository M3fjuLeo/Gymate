import Title from '../../ui/Title';
import img1 from '../../../public/images/gallery/img1.jpg';
import img2 from '../../../public/images/gallery/img2.jpg';
import img3 from '../../../public/images/gallery/img3.jpg';
import img4 from '../../../public/images/gallery/img4.jpg';
import img5 from '../../../public/images/gallery/img5.jpg';

function GalleryHome() {
  return (
    <section className="relative" id="gallery home">
      <img
        className="absolute right-0 top-20"
        src="public/images/gallery/bg-icon.png"
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
            <div className="relative col-span-2 row-span-2">
              <img
                src={img1}
                alt="gallery image"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="relative col-span-2 bg-cover bg-center">
              <img
                src={img2}
                alt="gallery image"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-2">
              <img
                src={img5}
                alt="gallery image"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src={img3}
                alt="gallery image"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src={img4}
                alt="gallery image"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
