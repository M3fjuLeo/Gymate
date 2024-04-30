import BlogTileContainer from './BlogTileContainer';
import BlogCategory from './BlogCategory';

function BlogCategoriesContainer() {
  return (
    <BlogTileContainer title="Categories">
      <BlogCategory title="Body Building" quantity="4" />
      <BlogCategory title="Boxing" quantity="4" />
      <BlogCategory title="Crossfit" quantity="3" />
      <BlogCategory title="Fitness" quantity="3" />
      <BlogCategory title="Meditation" quantity="1" />
      <BlogCategory title="Yoga" quantity="2" />
    </BlogTileContainer>
  );
}

export default BlogCategoriesContainer;
