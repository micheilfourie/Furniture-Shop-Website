import { Brand1, Brand2, Brand3, Brand4 } from "../assets/brands/index.js";

const brandList = [Brand1, Brand2, Brand3, Brand4];

const BrandBanner = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl translate-y-[30px] flex-wrap items-center justify-evenly bg-white p-6 shadow-md max-sm:p-2">
      {brandList.map((brand, index) => (
        <img
          loading="lazy"
          key={index}
          src={brand}
          alt={`brand${index + 1}`}
          className="object-fit object-center px-4"
        />
      ))}
    </div>
  );
};

export default BrandBanner;
