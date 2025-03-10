import { PageHeaderImage } from "../assets/index.js";
import { Link } from "react-router-dom";

const PageHeader = ({ pageHeading, breadcrumb = pageHeading }) => {
  return (
    <div className="mx-auto h-[380px] w-full">
      <div className="flex h-full w-full items-end justify-center overflow-hidden bg-[#E5E5E5] brightness-[0.7]">
        <img
          loading="lazy"
          src={PageHeaderImage}
          alt=""
          className="h-[300px] object-cover object-center"
        />
      </div>

      <div className="relative mx-auto h-full w-full max-w-screen-2xl -translate-y-full">
        <h1 className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-[calc(50%-50px)] text-center text-5xl font-[900] text-white uppercase">
          {pageHeading}
        </h1>

        <h3 className="text-md absolute bottom-4 left-4 px-10 text-center text-white uppercase max-md:px-0">
          <Link
            to="/"
            className="cursor-pointer px-2 font-semibold hover:text-orange-200"
          >
            home /
          </Link>
          {breadcrumb}
        </h3>
      </div>
    </div>
  );
};

export default PageHeader;
