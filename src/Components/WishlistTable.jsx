import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const WishlistTable = ({ wishlistProducts, setWishlistProducts }) => {
  const handleRemoveProduct = (index) => {
    const updatedWishlist = [...wishlistProducts];
    updatedWishlist.splice(index, 1);
    setWishlistProducts(updatedWishlist);
  };

  return (
    <table className={"bg-white"}>
      <thead>
        <tr className="bg-[#A0A0A0]">
          <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
            Product
          </th>
          <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
            Price
          </th>
          <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
            Status
          </th>
          <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
            Add
          </th>
          <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {wishlistProducts.map((product, index) => (
          <tr key={index}>
            <td className="flex items-center gap-4 p-4 text-center max-lg:flex-col-reverse max-lg:items-start max-sm:p-2 lg:gap-10 lg:p-10">
              <img
                src={product.image}
                alt=""
                className="max-h-[150px] object-cover"
              />

              <div className="max-lg:hidden">
                <span className="font-semibold uppercase">{product.name}</span>
                <br />
                <span className="text-sm">Color: black</span>
                <br />
                <span className="text-sm">Size: M</span>
              </div>
            </td>

            <td className="p-4 text-lg max-sm:p-2 lg:p-10">
              ${product.price.toFixed(2)}
            </td>

            <td className="p-4 text-nowrap uppercase max-sm:p-2 max-sm:text-sm lg:p-10">
              In Stock
            </td>

            <td className="p-4 max-sm:p-2 lg:p-10">
              <button className="group relative translate-y-1">
                <ShoppingCartIcon className="group-hover:text-orange size-8 cursor-pointer max-sm:size-6" />
                <span className="group-hover:text-orange absolute bottom-5 left-5 cursor-pointer text-lg font-bold max-sm:bottom-3">
                  +
                </span>
              </button>
            </td>

            <td className="p-4 max-sm:p-2 lg:p-10">
              <button
                onClick={() => handleRemoveProduct(index)}
                className="hover:bg-red bg-orange size-10 cursor-pointer text-lg font-semibold text-white max-sm:size-8"
              >
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WishlistTable;
