import { blogList } from "../data.js";
import { BlogCard } from "../Components/index.js";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const BlogMain = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1450px] flex-col justify-center gap-10 p-10 text-black">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {blogList.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            date={blog.date}
            body={blog.body}
          />
        ))}
      </div>
      <div className="flex w-full justify-center gap-4 bg-white py-4 text-sm">
        <ArrowLongLeftIcon className="hover:text-orange inline size-5 cursor-pointer" />
        <p className="text-orange cursor-pointer">01</p>
        <ArrowLongRightIcon className="hover:text-orange inline size-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default BlogMain;
