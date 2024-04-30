import Title from '../../ui/Title';
import LatestBlogBox from './LatestBlogBox';

function LatestBlog() {
  return (
    <section id="latest blog">
      <div className="page-padding container flex flex-col items-center py-20">
        <div className="flex w-[50%] flex-col items-center gap-4 text-center">
          <Title title={'Latest blog'} />
          <h1 className="text-4xl font-bold">Our Recent News</h1>
          <p className="text-neutral-600">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-6 md1200:flex-wrap">
          <LatestBlogBox
            date={'22.03.2022'}
            title={'Yoga For Everyone in 2023'}
            description={
              'This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.'
            }
          />
          <LatestBlogBox
            date={'13.09.2022'}
            title={'Getting Back Into CrossFit After Vacation'}
            description={
              'Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.'
            }
          />
          <LatestBlogBox
            date={'28.06.2022'}
            title={'Meet Fitness Ambassador Grace'}
            description={
              'Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.'
            }
          />
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;
