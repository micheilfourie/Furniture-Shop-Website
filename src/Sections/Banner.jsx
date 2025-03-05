import { Banner1, Banner2, DiscountBanner1, DiscountBanner2 } from "../assets/index.js";
import { ButtonMain, ItemTag } from "../Components/index.js";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="w-full h-[400px] flex justify-center items-center gap-10 mt-20 mb-10 px-10 max-w-screen-2xl mx-auto">

            <div className="h-full hover:shadow-lg transition-all duration-300 ease-in-out bg-white">

                <div className="relative flex justify-center items-center h-full">

                    <img src={Banner1} alt="" className="object-fill object-center" />

                    <div className="flex justify-between absolute top-6 px-6 w-full">

                        <ItemTag tagType="new" />
                        <h3 className="text-xl text-black font-semibold">$50.00</h3>

                    </div>

                    <div className="flex justify-between absolute bottom-6 px-6 w-full text-black">

                        <div className="flex flex-col justify-center">
                            <h4 className="text-lg font-bold">Product Name</h4>
                            <p className="text-md">Furnature</p>
                        </div>

                        <ButtonMain link="/shop" name="Buy Now" />

                    </div>
                </div>


            </div>

            <div className="relative h-full hover:shadow-lg transition-all duration-300 ease-in-out w-[60%] bg-white">

                <div className="flex justify-center items-center h-full">
                    <img src={Banner2} alt="" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 max-w-[400px] pr-10">

                    <Link to={"/about"}>
                        <h2 className="text-3xl text-black font-[700] uppercase hover:text-orange transition-colors duration-300 ease-in-out">
                            Design By Hurst Modern -<span className="text-orange"> 2025</span>
                        </h2>
                    </Link>

                </div>

            </div>

        </section >
    )
}

export default Banner
