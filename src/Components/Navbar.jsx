import { useState } from "react";
import { BurgerButton, NavMenuLink, CartModal } from "./index.js";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Logo } from "../assets/index.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    setCartOpen(!cartOpen);
  };

  const handleMenuToggle = () => {
    if (cartOpen) {
      setCartOpen(false);
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed z-30 flex h-[80px] w-full items-center justify-between bg-white px-10 text-black">
      <BurgerButton menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />

      <Link to={"/"}>
        <img loading="lazy" src={Logo} alt="Logo" />
      </Link>

      <div
        onClick={handleCartToggle}
        className={`hover:text-orange ${cartOpen && "text-orange"} relative cursor-pointer`}
      >
        <ShoppingCartIcon className="size-8 transition-colors duration-200 ease-in-out" />
        <div className="bg-red absolute top-[-2px] right-[-5px] flex size-[18px] items-center justify-center rounded-full border border-white">
          <span className="text-[10px] font-semibold text-white">3</span>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 -z-10 h-full w-[250px] bg-white text-black ${
          !menuOpen ? "translate-x-[-100%]" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="mt-[80px] flex flex-col items-start justify-center text-lg">
          <NavMenuLink link="/" name="Home" />
          <NavMenuLink link="/about" name="About" />
          <NavMenuLink link="/blog" name="Blog" />
          <NavMenuLink link="/contact" name="Contact" />
          <NavMenuLink link="/shop" name="Shop" />
          <NavMenuLink link="/shoppingcart" name="Shopping Cart" />
        </ul>
      </nav>

      <div
        className={`right- fixed top-[80px] right-0 -z-20 bg-white text-black ${
          !cartOpen ? "translate-x-[100%]" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <CartModal />
      </div>
    </nav>
  );
};

export default Navbar;
