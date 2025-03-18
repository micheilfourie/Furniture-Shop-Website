import { useState } from "react";
import {
  PageHeader,
  ShoppingCartTable,
  WishlistTable,
} from "../Components/index.js";
import { CheckoutMain } from "../Sections/index.js";
import { productList } from "../data.js";

const tabs = ["Wishlist", "Shopping Cart", "Checkout"];

const ShoppingCartMain = () => {
  const [activeTab, setActiveTab] = useState(tabs[1]);
  const [productInfo, setProductInfo] = useState(
    productList.slice(0, 3).map((product) => ({
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    })),
  );
  const [wishlistProducts, setWishlistProducts] = useState(
    productList.slice(3, 6).map((product) => ({
      name: product.name,
      image: product.image,
      price: product.price,
    })),
  );

  const handleDisplayActiveTab = (tab) => {
    switch (tab) {
      case "Wishlist":
        return (
          <WishlistTable
            wishlistProducts={wishlistProducts}
            setWishlistProducts={setWishlistProducts}
          />
        );
      case "Shopping Cart":
        return (
          <ShoppingCartTable
            productInfo={productInfo}
            setProductInfo={setProductInfo}
            setActiveTab={setActiveTab}
          />
        );
      case "Checkout":
        return <CheckoutMain />;
      default:
        null;
    }
  };

  return (
    <div>
      <PageHeader pageHeading={activeTab} />

      <div className="mx-auto flex w-full max-w-[1450px] flex-col justify-center gap-10 p-10 text-black max-md:px-4 max-sm:gap-4 max-sm:px-0 max-sm:py-4">
        <div className="grid grid-cols-3 items-center justify-center gap-10 max-md:grid-cols-1 max-md:gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`group border-orange relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden border-[2px] bg-white px-4 py-3 font-medium transition-all hover:bg-white md:py-6`}
            >
              <div
                className={`bg-orange absolute top-1/2 right-0 h-40 w-full ${activeTab === tab ? "" : "-translate-x-full"} -translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-x-0`}
              ></div>

              <p
                className={`text-md relative w-full ${activeTab === tab && "text-white"} uppercase transition-colors duration-300 ease-in-out group-hover:text-white`}
              >
                {tab}
              </p>
            </button>
          ))}
        </div>
        {handleDisplayActiveTab(activeTab)}
      </div>
    </div>
  );
};

export default ShoppingCartMain;
