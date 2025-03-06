import { Navbar, BrandBanner } from "../Components/index.js";
import {
  Hero,
  Banner,
  FeaturedProducts,
  BannerDiscount,
  PurchaseOnline,
  FromBlog,
  Footer,
} from "../Sections/index.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <FeaturedProducts />
      <BannerDiscount />
      <PurchaseOnline />
      <FromBlog />
      <BrandBanner />
      <Footer />
    </>
  );
};

export default Home;
