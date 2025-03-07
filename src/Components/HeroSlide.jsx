import { ButtonMain } from "./index.js";

const HeroSlide = ({ image }) => {
  return (
    <div className={`relative min-w-full`}>
      <div className="flex w-full justify-center">
        <img
          loading="lazy"
          src={image}
          alt="HeroImg1"
          className="h-full w-full object-fill object-center"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-semibold text-gray-500 uppercase">
          welcome to our
          <br />
          <span className="text-6xl font-bold text-black">
            elegant <br /> furniture
          </span>
          <br />
          gallery 2025
        </h1>

        <div className="mt-6">
          <ButtonMain link="/shop" name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
