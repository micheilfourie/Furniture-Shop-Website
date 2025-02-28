import { useState, useEffect } from "react"
import { Hero1, Hero2 } from "../assets/index.js"
import { HeroSlide } from "../Components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = [Hero1, Hero2, Hero1, Hero2]

const Hero = () => {

    const [slide, setSlide] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            handleSlideChange('next');
        }, 7000);

        return () => clearInterval(interval);

    }, [slide]);

    const handleSlideChange = (direction) => {
        setSlide((prevSlide) => {
            if (direction === "next") {
                return (prevSlide + 1) % slides.length;
            } else {
                return prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
            }
        });
    };

    return (
        <section className="w-full pt-[80px] max-w-screen-2xl mx-auto overflow-hidden">

            <div
                className="w-full flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${slide * 100}%)` }}
            >
                {slides.map((image, index) => (
                    <HeroSlide key={index} image={image} />
                ))}
            </div>

            <div className="flex justify-center items-center my-2">

                <button onClick={() => handleSlideChange('prev')} className="hover:cursor-pointer p-4 hover:text-orange text-gray-400">
                    <ChevronLeftIcon className="size-8 transition-colors ease-in-out duration-200" />
                </button>

                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer p-1 mx-[5px] ${slide === index ? "bg-orange scale-150" : "bg-gray-400"
                            }`}
                        onClick={() => setSlide(index)}
                    />
                ))}

                <button onClick={() => handleSlideChange('next')} className="hover:cursor-pointer p-4 hover:text-orange text-gray-400">
                    <ChevronRightIcon className="size-8 transition-colors ease-in-out duration-200" />
                </button>

            </div>

        </section>
    )
}

export default Hero
