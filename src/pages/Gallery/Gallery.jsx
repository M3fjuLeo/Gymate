import { useState } from 'react';
import PageHeading from '../../ui/PageHeading';
import scrollTop from '../../ui/scrollToTop';
import { galleryImg } from './Photos';

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
              key={image.id}
              src={image.img}
              alt="gallery photo"
              className="h-auto w-[24rem] object-cover"
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
