import BlogCategory from './BlogCategory';
import BlogTileContainer from './BlogTileContainer';
import PageHeading from '../../ui/PageHeading';
import RecentPost from '../../ui/RecentPost';
import BlogBox from './BlogBox';
import BlogCategoriesContainer from './BlogCategoriesContainer';
import BlogDiscountBanner from './BlogDiscountBanner';

const blogsData = [
  {
    img: 'src/pages/Blog/blog/1.jpg',
    recentImg: 'src/pages/Blog/blog/recent1.jpg',
    title: 'Yoga For Everyone in 2022',
    date: 'March 11, 2022',
    label: 'Yoga',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: 'src/pages/Blog/blog/2.jpg',
    recentImg: 'src/pages/Blog/blog/recent2.jpg',
    title: 'Getting Back Into CrossFit After Vacation',
    date: 'March 11, 2022',
    label: 'Gym',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: 'src/pages/Blog/blog/3.jpg',
    recentImg: 'src/pages/Blog/blog/recent3.jpg',
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Yoga',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: 'src/pages/Blog/blog/4.jpg',
    recentImg: 'src/pages/Blog/blog/recent4.jpg',
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Meditation',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: 'src/pages/Blog/blog/5.jpg',
    recentImg: 'src/pages/Blog/blog/recent5.jpg',
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Boxing',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: 'src/pages/Blog/blog/6.jpg',
    recentImg: 'src/pages/Blog/blog/recent6.jpg',
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Crossfit',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: 'src/pages/Blog/blog/7.jpg',
    recentImg: 'src/pages/Blog/blog/recent7.jpg',
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Boxing',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
];

const uniqueLabels = [...new Set(blogsData.map((blog) => blog.label))];

function Blog() {
  return (
    <section>
      <PageHeading title={'Blog'} />
      <div className="page-padding container flex flex-row gap-8 pt-20 md1000:flex-col">
        <div className="basis-4/6 md1000:basis-full">
          {blogsData.map((blog, index) => (
            <BlogBox
              key={index}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              label={blog.label}
            />
          ))}
        </div>

        <div className="basis-2/6">
          <div className="flex flex-col gap-10">
            <div className="flex w-full flex-row items-center justify-between rounded-xl border">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-4 outline-none"
              />
              <i className="fa-solid fa-magnifying-glass cursor-pointer rounded-r-lg bg-red-500 px-5 py-3 text-2xl text-white"></i>
            </div>

            <BlogCategoriesContainer title="Categories" />

            <BlogTileContainer title="Recent Posts">
              {blogsData.slice(0, 6).map((blog, index) => (
                <RecentPost
                  key={index}
                  img={blog.recentImg}
                  title={blog.title}
                  date={blog.date}
                />
              ))}
            </BlogTileContainer>

            <BlogTileContainer title="Popular Tags">
              <div className="flex flex-wrap gap-2">
                {uniqueLabels.map((label, index) => (
                  <h3
                    key={index}
                    className="cursor-pointer bg-white px-4 py-2 text-lg text-neutral-500 duration-300 hover:text-red-500"
                  >
                    #{label}
                  </h3>
                ))}
              </div>
            </BlogTileContainer>

            <BlogDiscountBanner />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
