import { ItemTag, Rating, ProductCardActions } from "./index.js";

const ProductCard = ({ image, isSale, isNew, price, name, rating }) => {
  return (
    <div className="mx-auto flex w-full justify-center bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="flex w-full flex-col items-center justify-center p-3">
        <div className="relative w-full">
          <div className="absolute top-2 flex w-full items-start justify-between px-2">
            <div className="flex flex-col gap-1">
              {isNew && <ItemTag tagType={"new"} />}

              {isSale && <ItemTag tagType={"sale"} />}
            </div>

            <h3 className="text-red text-lg font-semibold">
              ${parseFloat(price).toFixed(2)}
            </h3>
          </div>

          <img
            src={image}
            alt={`${name}Img`}
            className="h-full w-full object-fill object-center"
          />
        </div>

        <div className="flex flex-col items-center justify-center py-4">
          <h2 className="text-md font-semibold text-black uppercase">{name}</h2>
          <Rating rating={rating} />
        </div>

        <ProductCardActions />
      </div>
    </div>
  );
};

export default ProductCard;
