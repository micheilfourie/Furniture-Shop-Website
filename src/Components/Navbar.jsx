import { useState } from "react";
import { BurgerButton, NavMenuLink } from "./index.js";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Logo } from "../assets/index.js";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center text-black h-[80px] w-full fixed z-30 px-10 bg-white">

            <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <Link to={"/"}><img src={Logo} alt="Logo" /></Link>

            <Link to="/shoppingcart">
                <ShoppingCartIcon className="size-8 hover:text-orange transition-colors ease-in-out duration-200" />
            </Link>

            <nav className={`fixed top-0 left-0 w-56 h-full text-black bg-white -z-10 ${!menuOpen ? "translate-x-[-100%]" : ""} transition-all duration-500 ease-in-out`}>
                <ul className="mt-40 flex flex-col justify-center items-start text-lg">
                    <NavMenuLink link="/" name="Home" />
                    <NavMenuLink link="/about" name="About" />
                    <NavMenuLink link="/blog" name="Blog" />
                    <NavMenuLink link="/contact" name="Contact" />
                    <NavMenuLink link="/shop" name="Shop" />
                    <NavMenuLink link="/wishlist" name="Wishlist" />
                    <NavMenuLink link="/checkout" name="Checkout" />
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar
