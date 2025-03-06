import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const DiscountSlide = ({ image }) => {
  return (
    <div className="flex w-full items-center justify-center gap-8 bg-white px-10">
      <div className="flex h-full w-full justify-start">
        <img src={image} alt="" className="object-fit object-left" />
      </div>

      <div className="flex flex-col items-start justify-center gap-4 font-semibold text-gray-500">
        <h1 className="text-red text-4xl font-bold uppercase">
          Discount - 50%
        </h1>
        <p className="text-xs font-[500]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aut
          earum quasi alias repudiandae debitis voluptatum deleniti ullam magni
          asperiores, et numquam repellendus aliquam est eos nulla architecto
          rem consectetur!
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
