import { ButtonMain } from "./index.js"

const HeroSlide = ({ image, slide, index }) => {
    return (
        <div className={`min-w-full relative ${slide === index ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out`}>

            <div className="w-full flex justify-center">
                <img src={image} alt="HeroImg1" className="w-full h-full object-fill object-center" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-y-1/2">

                <h1 className="uppercase text-2xl text-gray-500 font-semibold ">

                    welcome to our
                    <br />
                    <span className="text-6xl font-bold text-black">elegant <br /> furniture</span>
                    <br />
                    gallery 2025

                </h1>

                <div className="mt-6">
                    <ButtonMain link="/shop" name="Shop Now" />
                </div>

            </div>

        </div>
    )
}

export default HeroSlide
