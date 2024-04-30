function BlogDiscountBanner() {
  return (
    <div className="relative md1000:hidden">
      <img
        className="absolute w-full"
        src="public/images/blog/sidebar1.png"
        alt="discount banner"
      />
      <h2 className="absolute top-7 bg-white px-8 py-4 text-2xl font-bold">
        GYMAT
      </h2>
      <div className="absolute left-5 top-24 font-bold text-white">
        <h2 className="text-6xl">34%</h2>
        <span className="text-2xl">Flat Discount</span>
      </div>
    </div>
  );
}

export default BlogDiscountBanner;
