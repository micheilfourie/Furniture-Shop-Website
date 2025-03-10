import { productList } from "../data.js";
import { ProductCard } from "../Components/index.js";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

const ShopMain = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1450px] flex-col justify-center gap-10 p-10 text-black">
      <div className="flex w-full items-center justify-between gap-4 bg-white py-4 text-sm max-md:flex-col-reverse max-md:items-start">
        <div className="flex items-center gap-4 px-10">
          <p className="hover:text-orange cursor-pointer">Categories</p>
          <p className="hover:text-orange cursor-pointer">Price</p>
          <p className="hover:text-orange cursor-pointer">Color</p>
          <p className="hover:text-orange cursor-pointer">Size</p>
        </div>

        <p className="px-10 text-nowrap">
          Showing 01 - 12 of {(12 * 5).toString()} Results
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productList.slice(0, 12).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            isSale={product.isSale}
            isNew={product.isNew}
            price={product.price}
            name={product.name}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="flex w-full justify-center gap-4 bg-white py-4 text-sm">
        <ArrowLongLeftIcon className="hover:text-orange inline size-5 cursor-pointer" />
        {["01", "02", "03", "04", "05"].map((item, index) => (
          <p
            key={index}
            className={`cursor-pointer ${index === 0 && "text-orange"}`}
          >
            {item}
          </p>
        ))}
        <ArrowLongRightIcon className="hover:text-orange inline size-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default ShopMain;
