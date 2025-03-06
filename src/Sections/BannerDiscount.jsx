import Slider from "react-slick";
import { useState, useRef } from "react";
import { DiscountBanner1, DiscountBanner2 } from "../assets/index.js";
import { DiscountSlide, TimedDiscount } from "../Components/index.js";
import { Link } from "react-router-dom";

const slides = [
  DiscountBanner1,
  DiscountBanner2,
  DiscountBanner1,
  DiscountBanner2,
];

const BannerDiscount = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    dots: false,
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <section className="mx-auto my-10 flex h-[400px] w-full max-w-screen-2xl justify-center gap-10 px-10">
      <div className="relative flex w-[70%] items-center justify-center bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          className="w-full overflow-hidden"
        >
          {slides.map((image, index) => (
            <div key={index} className="relative">
              <DiscountSlide key={index} image={image} />
            </div>
          ))}
        </Slider>

        <div className="absolute right-6 bottom-4 my-2 flex items-center justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`mx-[3px] h-2 w-2 rounded-full transition-all duration-300 hover:cursor-pointer ${
                activeIndex === index ? "bg-orange scale-[1.4]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <Link to={"/shop"}>
        <div className="h-full w-full bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
          <TimedDiscount />
        </div>
      </Link>
    </section>
  );
};

export default BannerDiscount;
