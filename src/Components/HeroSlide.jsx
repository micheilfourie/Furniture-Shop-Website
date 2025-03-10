import { ButtonMain } from "./index.js";

const HeroSlide = ({ image }) => {
  return (
    <div className="relative min-w-full">
      <div className="flex w-full justify-center">
        <img
          loading="lazy"
          src={image}
          alt="HeroImg1"
          className="min-h-[250px] w-full object-cover object-center"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 transform px-4 sm:px-8 md:px-16">
        <h1 className="font-semibold text-gray-500 uppercase max-lg:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
          <span className="max-md:hidden">
            Welcome to our
            <br />
          </span>
          <span className="font-bold text-black max-lg:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
            <span className="max-md:hidden">
              Elegant <br />
            </span>{" "}
            Furniture
          </span>
          <br />
          Gallery 2025
        </h1>

        <div className="mt-6">
          <ButtonMain link="/shop" name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
