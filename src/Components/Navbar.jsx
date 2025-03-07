import { useState } from "react";
import { BurgerButton, NavMenuLink } from "./index.js";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Logo } from "../assets/index.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-30 flex h-[80px] w-full items-center justify-between bg-white px-10 text-black">
      <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Link to={"/"}>
        <img loading="lazy" src={Logo} alt="Logo" />
      </Link>

      <Link to="/shoppingcart">
        <ShoppingCartIcon className="hover:text-orange size-8 transition-colors duration-200 ease-in-out" />
      </Link>

      <nav
        className={`fixed top-0 left-0 -z-10 h-full w-56 bg-white text-black ${
          !menuOpen ? "translate-x-[-100%]" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="mt-40 flex flex-col items-start justify-center text-lg">
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
  );
};

export default Navbar;
