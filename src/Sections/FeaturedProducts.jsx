import { useRef } from "react"
import { CustomHeading, ProductCard } from "../Components/index.js"
import Slider from "react-slick";
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
        <section className="max-w-screen-2xl mx-auto py-10 w-full">

            <div className="mb-14">
                <CustomHeading title="Featured Products" />
            </div>

            <div className="relative flex justify-center items-center">

                <Slider ref={sliderRef} {...sliderSettings} className="px-14 overflow-hidden w-full">
                    {featuredProducts.map((product, index) => (
                        <div key={index} className="px-1.5 pb-4 flex justify-center">
                            <ProductCard
                                key={index}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                isNew={product.isNew}
                                isSale={product.isSale}
                                rating={product.rating}
                            />
                        </div>
                    ))}
                </Slider>

                <button
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-[500] py-2 px-4 hover:text-white hover:bg-orange bg-white transition-colors duration-300 ease-in-out cursor-pointer"
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
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-[500] py-2 px-4 hover:text-white hover:bg-orange bg-white  transition-colors duration-300 ease-in-out cursor-pointer"
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
        </section>
    );
};

export default FeaturedProducts
