import { ItemTag, Rating, ProductCardActions } from "./index.js"

const ProductCard = ({ image, isSale, isNew, price, name, rating }) => {

    return (
        <div className="flex justify-center mx-auto w-full bg-white hover:shadow-lg transition-all duration-300 ease-in-out">

            <div className="flex flex-col justify-center items-center p-3 w-full">
                <div className="w-full relative">
                    <div className="absolute top-2 px-2 flex justify-between items-center w-full">

                        <div className="flex gap-1">
                            {isNew &&
                                <ItemTag tagType={"new"} />
                            }

                            {isSale &&
                                <ItemTag tagType={"sale"} />
                            }
                        </div>


                        <h3 className="text-lg text-red font-semibold">${parseFloat(price).toFixed(2)}</h3>

                    </div>

                    <img src={image} alt={`${name}Img`} className="w-full h-full object-fill object-center" />

                </div>

                <div className="flex flex-col justify-center items-center py-4">
                    <h2 className="text-md text-black font-semibold uppercase">{name}</h2>
                    <Rating rating={rating} />
                </div>

                <ProductCardActions />

            </div>
        </div>
    )
}

export default ProductCard
