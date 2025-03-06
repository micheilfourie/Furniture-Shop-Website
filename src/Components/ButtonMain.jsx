import { Link } from "react-router-dom";

const ButtonMain = ({ action = () => {}, link = "", name }) => {
  return (
    <button className="group border-orange relative inline-flex h-[50px] w-[135px] items-center justify-center overflow-hidden border-[2px] bg-white px-2 py-3 font-medium transition-all hover:bg-white">
      <Link to={link}>
        <div className="bg-orange absolute top-1/2 right-0 h-20 w-full -translate-x-full -translate-y-1/2 transition-all duration-500 ease-out group-hover:translate-x-0"></div>

        <p className="relative w-full text-sm text-black uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
          {name}
        </p>
      </Link>
    </button>
  );
};

export default ButtonMain;
