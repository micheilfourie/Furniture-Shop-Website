import { Navbar } from "../Components/index.js";
import { Hero, Banner, FeaturedProducts } from "../Sections/index.js"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Banner />
            <FeaturedProducts />
        </>
    )
}

export default Home
