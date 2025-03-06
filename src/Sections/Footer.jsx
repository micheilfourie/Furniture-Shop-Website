import { CustomHeading, ButtonMain } from "../Components/index.js";

const Footer = () => {
  return (
    <footer className="mx-auto w-full bg-white text-black">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-16 gap-y-10 px-10 pt-20 pb-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <CustomHeading
            title="Contact Us"
            justifyCenter={false}
            isSubtitle={true}
          />
          <ul className="flex flex-col gap-4 py-4">
            <li className="flex gap-2">
              <span className="w-[70px] font-semibold">Address:</span>
              28 Green Tower,
              <br />
              Street Name,
              <br />
              New York City,
              <br />
              USA
            </li>

            <li className="flex gap-2">
              <span className="w-[70px] font-semibold">Phone: </span>
              012-345-6789
            </li>

            <li className="flex gap-2">
              <span className="w-[70px] font-semibold">Email: </span>
              hurst@example.com
            </li>
          </ul>
        </div>

        <div>
          <CustomHeading
            title="Accounts"
            justifyCenter={false}
            isSubtitle={true}
          />
          <ul className="list-inside list-disc py-4">
            <li className="hover:text-orange cursor-pointer">My Account</li>
            <li className="hover:text-orange cursor-pointer">My Wishlist</li>
            <li className="hover:text-orange cursor-pointer">My Cart</li>
            <li className="hover:text-orange cursor-pointer">Sign In</li>
            <li className="hover:text-orange cursor-pointer">Check Out</li>
          </ul>
        </div>

        <div>
          <CustomHeading
            title="Shipping"
            justifyCenter={false}
            isSubtitle={true}
          />
          <ul className="list-inside list-disc py-4">
            <li className="hover:text-orange cursor-pointer">New Products</li>
            <li className="hover:text-orange cursor-pointer">Top Sellers</li>
            <li className="hover:text-orange cursor-pointer">Manufacturers</li>
            <li className="hover:text-orange cursor-pointer">Suppliers</li>
            <li className="hover:text-orange cursor-pointer">Specials</li>
          </ul>
        </div>

        <div>
          <CustomHeading
            title="Newsletter"
            justifyCenter={false}
            isSubtitle={true}
          />
          <div className="flex flex-col gap-2 py-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-400 p-3 outline-0"
            />
            <ButtonMain name="Subscribe" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border-t border-gray-300 px-20 py-6">
        <p className="text-sm">Copyright &copy; 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
