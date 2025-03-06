import {
  HeartIcon,
  MagnifyingGlassPlusIcon,
  ArrowPathIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const ProductCardActions = () => {
  return (
    <div className="mt-2 flex w-full items-center justify-evenly bg-gray-100 px-4 py-2 text-black">
      <button className="hover:text-red flex w-full justify-center p-2 hover:cursor-pointer">
        <HeartIcon className="size-4" />
      </button>
      |
      <button className="hover:text-red flex w-full justify-center p-2 hover:cursor-pointer">
        <MagnifyingGlassPlusIcon className="size-4" />
      </button>
      |
      <button className="hover:text-red flex w-full justify-center p-2 hover:cursor-pointer">
        <ArrowPathIcon className="size-4" />
      </button>
      |
      <button className="hover:text-red flex w-full justify-center p-2 hover:cursor-pointer">
        <ShoppingCartIcon className="size-4" />
      </button>
    </div>
  );
};

export default ProductCardActions;
