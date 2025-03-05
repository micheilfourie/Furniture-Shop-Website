import { Navbar } from "../Components/index.js";
import { Hero, Banner, FeaturedProducts, BannerDiscount, PurchaseOnline } from "../Sections/index.js"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Banner />
            <FeaturedProducts />
            <BannerDiscount />
            <PurchaseOnline />
        </>
    )
}

export default Home
