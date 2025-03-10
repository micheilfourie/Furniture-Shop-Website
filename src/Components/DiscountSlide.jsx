import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const DiscountSlide = ({ image }) => {
  return (
    <div className="flex w-full items-center justify-center gap-4 bg-white p-6 max-sm:flex-col max-sm:pt-0">
      <img
        loading="lazy"
        src={image}
        alt=""
        className="w-[50%] object-cover object-left"
      />

      <div className="flex flex-col items-start justify-center gap-4 font-semibold text-gray-500 max-sm:items-center max-sm:text-center">
        <h1 className="text-red text-4xl font-bold uppercase">
          Discount - 50%
        </h1>
        <p className="text-xs font-[500]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aut
          earum quasi alias repudiandae debitis voluptatum deleniti ullam magni
          asperiores.
        </p>

        <Link to="/shop">
          <button className="text-red hover:text-orange text-lg hover:cursor-pointer">
            Get Discount <ArrowLongRightIcon className="inline w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DiscountSlide;
