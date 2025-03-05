import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"


const DiscountSlide = ({ image }) => {
    return (
        <div className="bg-white flex justify-center items-center w-full px-10 gap-8">

            <div className="flex justify-start w-full h-full">
                <img src={image} alt="" className="object-fit object-left" />
            </div>

            <div className="text-gray-500 font-semibold flex flex-col justify-center items-start gap-4">

                <h1 className="text-4xl font-bold text-red uppercase">Discount - 50%</h1>
                <p className="text-xs font-[500]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aut earum quasi alias repudiandae debitis voluptatum deleniti ullam magni asperiores, et numquam repellendus aliquam est eos nulla architecto rem consectetur!
                </p>

                <Link to="/shop">
                    <button className="text-red text-lg hover:cursor-pointer hover:text-orange">
                        Get Discount <ArrowLongRightIcon className="w-6 inline" />
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default DiscountSlide
