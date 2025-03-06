import {
  Banner1,
  Banner2,
  DiscountBanner1,
  DiscountBanner2,
} from "../assets/index.js";
import { ButtonMain, ItemTag } from "../Components/index.js";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="mx-auto mt-20 mb-10 flex h-[400px] w-full max-w-screen-2xl items-center justify-center gap-10 px-10">
      <div className="h-full bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="relative flex h-full items-center justify-center">
          <img src={Banner1} alt="" className="object-fill object-center" />

          <div className="absolute top-6 flex w-full justify-between px-6">
            <ItemTag tagType="new" />
            <h3 className="text-xl font-semibold text-black">$50.00</h3>
          </div>

          <div className="absolute bottom-6 flex w-full justify-between px-6 text-black">
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-bold">Product Name</h4>
              <p className="text-md">Furnature</p>
            </div>

            <ButtonMain link="/shop" name="Buy Now" />
          </div>
        </div>
      </div>

      <div className="relative h-full w-[60%] bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="flex h-full items-center justify-center">
          <img src={Banner2} alt="" />
        </div>

        <div className="absolute top-1/2 left-1/2 max-w-[400px] -translate-y-1/2 pr-10">
          <Link to={"/about"}>
            <h2 className="hover:text-orange text-3xl font-[700] text-black uppercase transition-colors duration-300 ease-in-out">
              Design By Hurst Modern -<span className="text-orange"> 2025</span>
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
