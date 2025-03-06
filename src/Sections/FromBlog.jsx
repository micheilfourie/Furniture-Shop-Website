import { CustomHeading, BlogCard } from "../Components/index.js";
import { blogList } from "../data.js";

const FromBlog = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-screen-2xl p-10">
      <CustomHeading title="From Our Blog" />

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {blogList.slice(0, 3).map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            date={blog.date}
            body={blog.body}
          />
        ))}
      </div>
    </section>
  );
};

export default FromBlog;
