import { Navbar, PageHeader } from "../Components/index.js";
import { Footer, ShopMain } from "../Sections/index.js";

const Shop = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageHeading={"Shop"} />
      <ShopMain />
      <Footer />
    </>
  );
};

export default Shop;
