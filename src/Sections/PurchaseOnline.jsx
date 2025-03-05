import { useState } from "react";
import { CustomHeading, ProductCard, CatagoryButton } from "../Components/index.js"
import productList from "../data.js"

const PurchaseOnline = () => {

    const [catagory, setCatagory] = useState("all");
    const [filteredList, setFilteredList] = useState(productList);

    const filterProductSale = () => {
        setFilteredList(productList.filter(product => product.isSale));
        setCatagory("sale");
    }

    const filterProductNew = () => {
        setFilteredList(productList.filter(product => product.isNew));
        setCatagory("new");
    }

    const filterProductAll = () => {
        setFilteredList(productList);
        setCatagory("all");
    }

    return (
        <section className="w-full max-w-screen-2xl mx-auto py-10">

            <CustomHeading title="Purchase Online at Hurst" />

            <div className="flex justify-center items-center gap-6 pb-10 pt-6">
                <CatagoryButton action={filterProductAll} catagory={catagory} catagoryRef="all" name="All Products" />
                <CatagoryButton action={filterProductNew} catagory={catagory} catagoryRef="new" name="New Arrivals" />
                <CatagoryButton action={filterProductSale} catagory={catagory} catagoryRef="sale" name="On Sale" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-center mx-10">
                {filteredList.map((product, index) => (
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
        </section>
    )
}

export default PurchaseOnline
