import PageHeading from '../../ui/PageHeading';
import { useState } from 'react';
import scrollTop from '../../ui/scrollToTop';
import Img1 from '../../../public/images/GalleryPage/1.jpg';
import Img2 from '../../../public/images/GalleryPage/2.jpg';
import Img3 from '../../../public/images/GalleryPage/3.jpg';
import Img4 from '../../../public/images/GalleryPage/4.jpg';
import Img5 from '../../../public/images/GalleryPage/5.jpg';
import Img6 from '../../../public/images/GalleryPage/6.jpg';
import Img7 from '../../../public/images/GalleryPage/7.jpg';
import Img8 from '../../../public/images/GalleryPage/8.jpg';
import Img9 from '../../../public/images/GalleryPage/9.jpg';
import Img10 from '../../../public/images/GalleryPage/10.jpg';
import Img11 from '../../../public/images/GalleryPage/11.jpg';
import Img12 from '../../../public/images/GalleryPage/12.jpg';

const galleryImg = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
];

function Gallery() {
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const maxPages = Math.ceil(galleryImg.length / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const displayImages = galleryImg.filter(
    (image, index) => index >= startIndex && index < endIndex,
  );

  function toPrevPage() {
    if (page === 1) return;
    scrollTop();
    setPage(page - 1);
  }

  function toNextPage() {
    if (page === maxPages) return;
    scrollTop();
    setPage(page + 1);
  }

  return (
    <section>
      <PageHeading title={'Gallery'} />
      <div className="page-padding container flex flex-col items-center justify-center gap-12 pt-20">
        <div className="grid-rows-auto grid grid-cols-3 items-center gap-4 md1200:grid-cols-2">
          {displayImages.map((image) => (
            <img
              // key={image.id}
              src={image}
              alt="gallery photo"
              className="h-[24rem] w-[24rem]"
            />
          ))}
        </div>
        <div className="flex flex-row items-center gap-8 text-2xl">
          <button
            onClick={toPrevPage}
            className="duration-300 hover:text-red-500"
          >
            <i className="fa-solid fa-arrow-left "></i>
          </button>

          <h3>{page}</h3>

          <button
            onClick={toNextPage}
            className="duration-300 hover:text-red-500"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
