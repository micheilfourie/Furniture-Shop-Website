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

    return (
        <section className="w-full pt-[80px] mx-auto overflow-hidden relative max-w-[2560px]">

            <Slider ref={sliderRef} {...sliderSettings} className="w-full relative">
                {slides.map((image, index) => (
                    <HeroSlide key={index} image={image} />
                ))}
            </Slider>

            <button
                className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 p-4 text-gray-400 hover:text-orange"
                onClick={handlePrevSlide}
            >
                <ChevronLeftIcon className="h-8 w-8" />
            </button>

            <button
                className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 p-4 text-gray-400 hover:text-orange"
                onClick={handleNextSlide}
            >
                <ChevronRightIcon className="h-8 w-8" />
            </button>

            <div className="flex justify-center items-center my-2 absolute bottom-10 right-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 mx-[3px] ${activeIndex === index ? "bg-orange scale-[1.4]" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
