import Slider from "react-slick";
import { useState, useRef } from "react";
import { DiscountBanner1, DiscountBanner2 } from "../assets/index.js";
import { DiscountSlide, TimedDiscount } from "../Components/index.js";
import { Link } from "react-router-dom";

const slides = [DiscountBanner1, DiscountBanner2, DiscountBanner1, DiscountBanner2]

const BannerDiscount = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: false,
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
        <section className="w-full h-[400px] max-w-screen-2xl mx-auto px-10 my-10 flex justify-center gap-10">

            <div className="relative w-[70%] bg-white flex justify-center items-center hover:shadow-lg transition-all duration-300 ease-in-out">
                <Slider ref={sliderRef} {...sliderSettings} className="w-full overflow-hidden">
                    {slides.map((image, index) => (
                        <div key={index} className="relative">
                            <DiscountSlide key={index} image={image} />
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-center items-center my-2 absolute bottom-4 right-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 mx-[3px] hover:cursor-pointer ${activeIndex === index ? "bg-orange scale-[1.4]" : "bg-gray-400"}`}
                        />
                    ))}
                </div>
            </div>
            <Link to={"/shop"}>
                <div className="w-full h-full bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
                    <TimedDiscount />
                </div>
            </Link>

        </section>
    )
}

export default BannerDiscount
