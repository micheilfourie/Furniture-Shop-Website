import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const BlogCard = ({ title, image, date, body }) => {
  const dateSplit = date.split(" ");

  const day = dateSplit.shift();
  const monthYear = dateSplit.join(", ");

  return (
    <div className="mx-auto flex w-full max-w-[500px] flex-col gap-4 bg-white p-6 transition-all duration-300 ease-in-out hover:shadow-lg">
      <img
        loading="lazy"
        src={image}
        alt=""
        className="h-[200px] w-full object-cover object-center"
      />

      <div className="flex gap-3">
        <div className="border-red text-red font-montserrat flex h-11 w-11 items-center justify-center border font-semibold">
          {day}
        </div>

        <div className="flex flex-col justify-center">
          <h5 className="text-red text-sm font-[600]">{monthYear}</h5>
          <h5 className="text-md font-bold text-black uppercase">{title}</h5>
        </div>
      </div>

      <p className="line-clamp-3 text-[13px] text-ellipsis text-gray-500">
        {body}
      </p>

      <Link
        to={`/blog`}
        className="text-red text-md hover:text-orange hover:cursor-pointer"
      >
        Read More <ArrowLongRightIcon className="inline w-6" />
      </Link>
    </div>
  );
};

export default BlogCard;
