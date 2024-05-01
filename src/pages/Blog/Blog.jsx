import BlogTileContainer from './BlogTileContainer';
import PageHeading from '../../ui/PageHeading';
import RecentPost from '../../ui/RecentPost';
import BlogBox from './BlogBox';
import BlogCategoriesContainer from './BlogCategoriesContainer';
import BlogDiscountBanner from './BlogDiscountBanner';
import Img1 from '../../../public/images/blog/1.jpg';
import Img2 from '../../../public/images/blog/2.jpg';
import Img3 from '../../../public/images/blog/3.jpg';
import Img4 from '../../../public/images/blog/4.jpg';
import Img5 from '../../../public/images/blog/5.jpg';
import Img6 from '../../../public/images/blog/6.jpg';
import Img7 from '../../../public/images/blog/7.jpg';
import Recent1 from '../../../public/images/blog/recent1.jpg';
import Recent2 from '../../../public/images/blog/recent2.jpg';
import Recent3 from '../../../public/images/blog/recent3.jpg';
import Recent4 from '../../../public/images/blog/recent4.jpg';
import Recent5 from '../../../public/images/blog/recent5.jpg';
import Recent6 from '../../../public/images/blog/recent6.jpg';
import Recent7 from '../../../public/images/blog/recent7.jpg';

const blogsData = [
  {
    img: Img1,
    recentImg: Recent1,
    title: 'Yoga For Everyone in 2022',
    date: 'March 11, 2022',
    label: 'Yoga',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: Img2,
    recentImg: Recent2,
    title: 'Getting Back Into CrossFit After Vacation',
    date: 'March 11, 2022',
    label: 'Gym',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: Img3,
    recentImg: Recent3,
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Yoga',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: Img4,
    recentImg: Recent4,
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Meditation',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: Img5,
    recentImg: Recent5,
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Boxing',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: Img6,
    recentImg: Recent6,
    title: 'Meet Fitness Ambassador Grace',
    date: 'March 11, 2022',
    label: 'Crossfit',
    description:
      'Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.',
  },
  {
    img: Img7,
    recentImg: Recent7,
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
