import { Link } from "react-router-dom";

const NavMenuButton = ({ link, name }) => {
  return (
    <li className="group relative inline-flex h-12 w-full items-center justify-start overflow-hidden bg-white py-1.5 pl-16 font-medium transition-all hover:bg-white">
      <Link to={link}>
        <div className="bg-orange absolute top-1/2 right-0 h-20 w-full -translate-x-full -translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-x-0"></div>

        <h3 className="relative w-full text-left text-[16px] font-semibold text-black uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
          {name}
        </h3>
      </Link>
    </li>
  );
};

export default NavMenuButton;
