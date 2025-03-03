import { Banner1, Banner2 } from "../assets/index.js";
import { ButtonMain, ItemTag } from "../Components/index.js";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="w-full flex justify-evenly items-center my-20 max-w-screen-2xl px-10 mx-auto relative">

            <div className="relative">

                <img src={Banner1} alt="" />

                <div className="flex justify-between absolute top-0 w-full">

                    <ItemTag tagType="new" isInline={true} />
                    <h3 className="text-xl text-black font-semibold">$50.00</h3>

                </div>

                <div className="flex justify-between absolute bottom-0 w-full text-black">

                    <div className="flex flex-col justify-center">
                        <h4 className="text-lg font-bold">Product Name</h4>
                        <p className="text-md">Furnature</p>
                    </div>

                    <ButtonMain link="/shop" name="Buy Now" />

                </div>

            </div>

            <div className="relative">

                <img src={Banner2} alt="" />

                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-1/4 w-[200px]">

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
