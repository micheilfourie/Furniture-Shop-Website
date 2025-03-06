import { useRef } from "react";
import { CustomHeading, ProductCard } from "../Components/index.js";
import Slider from "react-slick";
import { productList } from "../data.js";

const featuredProducts = productList.filter((product) => product.isFeatured);

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
    <section className="mx-auto w-full max-w-screen-2xl py-10">
      <div className="mb-10">
        <CustomHeading title="Featured Products" />
      </div>

      <div className="relative flex items-center justify-center">
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          className="w-full overflow-hidden px-14"
        >
          {featuredProducts.map((product, index) => (
            <div key={index} className="flex justify-center px-1.5 pb-4">
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
          className="hover:bg-orange absolute top-1/2 left-3 -translate-y-1/2 transform cursor-pointer bg-white px-4 py-2 text-sm font-[500] text-gray-500 transition-colors duration-300 ease-in-out hover:text-white"
          onClick={handlePrevSlide}
        >
          <p>
            p <br />
            r <br />
            e <br />v
          </p>
        </button>

        <button
          className="hover:bg-orange absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer bg-white px-4 py-2 text-sm font-[500] text-gray-500 transition-colors duration-300 ease-in-out hover:text-white"
          onClick={handleNextSlide}
        >
          <p>
            n <br />
            e <br />
            x <br />t
          </p>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
