import { useRef } from "react"
import { CustomHeading, ProductCard } from "../Components/index.js"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productList from "../data.js"

const featuredProducts = productList.filter(product => product.isFeatured);

const FeaturedProducts = () => {

    const sliderRef = useRef(null);

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: false,
        dots: false,
    };

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="max-w-screen-2xl mx-auto">

            <div className="mb-10">
                <CustomHeading title="Featured Products" />
            </div>

            <div className="relative flex justify-center items-center">

                <Slider ref={sliderRef} {...sliderSettings} className="px-20 overflow-hidden">
                    {featuredProducts.map(({ name, image, price, isNew, isSale, rating }, index) => (
                        <ProductCard
                            key={index}
                            name={name}
                            image={image}
                            price={price}
                            isNew={isNew}
                            isSale={isSale}
                            rating={rating}
                        />
                    ))}
                </Slider>

                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black py-2 px-4 hover:text-white hover:bg-orange transition-colors duration-300 ease-in-out cursor-pointer"
                    onClick={handlePrevSlide}
                >
                    <p>
                        p <br />
                        r <br />
                        e <br />
                        v
                    </p>

                </button>

                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black py-2 px-4 hover:text-white hover:bg-orange transition-colors duration-300 ease-in-out cursor-pointer"
                    onClick={handleNextSlide}
                >
                    <p>
                        n <br />
                        e <br />
                        x <br />
                        t
                    </p>

                </button>

            </div>
        </div>
    );
};

export default FeaturedProducts
