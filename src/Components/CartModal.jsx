import { productList } from "../data.js";
import { ButtonMain } from "../Components/index.js";

const CartModal = () => {
  return (
    <div className="flex flex-col">
      <p className="p-6 text-center">
        You have <span className="text-red font-semibold">3 items</span> in your
        cart
      </p>
      <div className="max-h-[400px] overflow-y-auto border-y border-gray-200">
        <table className={"bg-white"}>
          <tbody className="divide-y divide-gray-200">
            {productList.slice(0, 3).map((product, index) => (
              <tr key={index}>
                <td className="flex items-center gap-4 p-4 text-center">
                  <img
                    src={product.image}
                    alt=""
                    className="max-h-[100px] object-cover"
                  />

                  <div className="text-start">
                    <span className="font-semibold uppercase">
                      {product.name}
                    </span>
                    <br />
                    Price: ${product.price.toFixed(2)}
                    <br />
                    Qty: 1
                  </div>
                </td>

                <td className="p-4 text-lg lg:p-10"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6">
        <ButtonMain link="/shoppingcart" name="View Cart" isFullWidth={true} />
      </div>
    </div>
  );
};

export default CartModal;
