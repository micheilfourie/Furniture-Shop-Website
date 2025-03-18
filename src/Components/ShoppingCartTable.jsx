import { ButtonMain } from "./index.js";

const ShoppingCartTable = ({ productInfo, setProductInfo, setActiveTab }) => {
  const handlePrductQuantityChange = (index, quantity) => {
    if (quantity < 1) {
      return;
    }
    const updatedProductInfo = [...productInfo];
    updatedProductInfo[index].quantity = quantity;
    setProductInfo(updatedProductInfo);
  };

  const handleRemoveProduct = (index) => {
    const updatedProductInfo = [...productInfo];
    updatedProductInfo.splice(index, 1);
    setProductInfo(updatedProductInfo);
  };

  return (
    <>
      <table className={"bg-white"}>
        <thead>
          <tr className="bg-[#A0A0A0]">
            <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
              Product
            </th>
            <th className="p-4 text-start text-lg text-white uppercase max-lg:hidden max-sm:p-2 lg:p-10">
              Price
            </th>
            <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
              Quantity
            </th>
            <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10">
              Total
            </th>
            <th className="p-4 text-start text-lg text-white uppercase max-sm:p-2 lg:p-10"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {productInfo.map((product, index) => (
            <tr key={index}>
              <td className="flex items-center gap-4 p-4 text-center max-lg:flex-col-reverse max-lg:items-start max-sm:gap-2 max-sm:p-2 lg:gap-10 lg:p-10">
                <img
                  src={product.image}
                  alt=""
                  className="max-h-[150px] object-cover"
                />

                <div className="max-lg:hidden">
                  <span className="font-semibold uppercase">
                    {product.name}
                  </span>
                  <br />
                  <span className="text-sm">Color: black</span>
                  <br />
                  <span className="text-sm">Size: M</span>
                </div>
              </td>

              <td className="p-4 text-lg max-lg:hidden max-sm:p-2 lg:p-10">
                ${product.price.toFixed(2)}
              </td>

              <td className="p-4 max-sm:p-2 lg:p-10">
                <div className="flex h-10 items-center gap-1 max-sm:h-8 max-sm:gap-0">
                  <button
                    onClick={() =>
                      handlePrductQuantityChange(index, product.quantity - 1)
                    }
                    className="h-full w-10 cursor-pointer bg-gray-100 text-lg font-semibold hover:bg-gray-200 max-sm:w-8"
                  >
                    -
                  </button>

                  <div className="flex h-full w-10 cursor-pointer items-center justify-center bg-gray-100 text-lg max-sm:w-8">
                    {product.quantity}
                  </div>

                  <button
                    onClick={() =>
                      handlePrductQuantityChange(index, product.quantity + 1)
                    }
                    className="h-full w-10 cursor-pointer bg-gray-100 text-lg font-semibold hover:bg-gray-200 max-sm:w-8"
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="p-4 text-lg max-sm:p-2 lg:p-10">
                ${(product.price * product.quantity).toFixed(2)}
              </td>

              <td className="p-4 lg:p-10">
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

      <div className="flex items-center justify-between bg-white px-10 py-4 max-sm:px-4">
        <h1 className="text-black uppercase">
          <span>
            Subtotal = $
            {productInfo
              .reduce(
                (total, product) => total + product.price * product.quantity,
                0,
              )
              .toFixed(2)}
          </span>
        </h1>
        <ButtonMain name="Checkout" action={() => setActiveTab("Checkout")} />
      </div>
    </>
  );
};

export default ShoppingCartTable;
