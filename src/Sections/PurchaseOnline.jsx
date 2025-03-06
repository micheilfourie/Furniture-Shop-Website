import { useState } from "react";
import {
  CustomHeading,
  ProductCard,
  CatagoryButton,
  ButtonMain,
} from "../Components/index.js";
import { productList } from "../data.js";

const PurchaseOnline = () => {
  const [catagory, setCatagory] = useState("all");
  const [filteredList, setFilteredList] = useState(productList);

  const filterProductSale = () => {
    setFilteredList(productList.filter((product) => product.isSale));
    setCatagory("sale");
  };

  const filterProductNew = () => {
    setFilteredList(productList.filter((product) => product.isNew));
    setCatagory("new");
  };

  const filterProductAll = () => {
    setFilteredList(productList);
    setCatagory("all");
  };

  return (
    <section className="mx-auto w-full max-w-screen-2xl py-10">
      <CustomHeading title="Purchase Online at Hurst" />

      <div className="flex items-center justify-center gap-6 py-6">
        <CatagoryButton
          action={filterProductAll}
          catagory={catagory}
          catagoryRef="all"
          name="All Products"
        />
        <CatagoryButton
          action={filterProductNew}
          catagory={catagory}
          catagoryRef="new"
          name="New Arrivals"
        />
        <CatagoryButton
          action={filterProductSale}
          catagory={catagory}
          catagoryRef="sale"
          name="On Sale"
        />
      </div>

      <div className="mx-10 grid grid-cols-2 items-center justify-center gap-3 md:grid-cols-3 lg:grid-cols-4">
        {filteredList.slice(0, 4 * 2).map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            isSale={product.isSale}
            isNew={product.isNew}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="mt-10 flex w-full justify-center">
        <ButtonMain link="/shop" name="View More" />
      </div>
    </section>
  );
};

export default PurchaseOnline;
