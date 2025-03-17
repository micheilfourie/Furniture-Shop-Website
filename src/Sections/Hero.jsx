import { useState, useRef } from "react";
import { Hero1, Hero2 } from "../assets/index.js";
import { HeroSlide } from "../Components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";

const slides = [Hero1, Hero2, Hero1, Hero2];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    dots: false,
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <section className="relative mx-auto w-full max-w-[2560px] overflow-hidden pt-[80px]">
      <Slider ref={sliderRef} {...sliderSettings} className="relative w-full">
        {slides.map((image, index) => (
          <HeroSlide key={index} image={image} />
        ))}
      </Slider>

      <button
        className="hover:text-orange absolute top-1/2 left-0 z-10 -translate-y-1/2 transform cursor-pointer p-4 text-gray-400 max-md:hidden"
        onClick={handlePrevSlide}
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>

      <button
        className="hover:text-orange absolute top-1/2 right-0 z-10 -translate-y-1/2 transform cursor-pointer p-4 text-gray-400 max-md:hidden"
        onClick={handleNextSlide}
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>

      <div className="absolute right-4 bottom-4 my-2 flex items-center justify-center max-md:right-1/2 max-md:bottom-0 max-md:translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-[3px] h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-orange scale-[1.4]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
