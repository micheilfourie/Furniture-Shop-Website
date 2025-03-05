import { HeartIcon, MagnifyingGlassPlusIcon, ArrowPathIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"

const ProductCardActions = () => {
    return (
        <div className="flex justify-evenly items-center text-black bg-gray-100 px-4 py-2 w-full mt-2">
            <button className="p-2 hover:text-red hover:cursor-pointer w-full flex justify-center">
                <HeartIcon className="size-4 " />
            </button>
            |
            <button className="p-2 hover:text-red hover:cursor-pointer w-full flex justify-center">
                <MagnifyingGlassPlusIcon className="size-4" />
            </button>
            |
            <button className="p-2 hover:text-red hover:cursor-pointer w-full flex justify-center">
                <ArrowPathIcon className="size-4" />
            </button>
            |
            <button className="p-2 hover:text-red hover:cursor-pointer w-full flex justify-center">
                <ShoppingCartIcon className="size-4" />
            </button>
        </div>
    )
}

export default ProductCardActions
