import { Link } from "react-router-dom";

const NavMenuButton = ({ link, name }) => {
    return (

        <li className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white hover:bg-white group py-1.5 pl-16 w-full h-12">
            <Link to={link}>

                <div className="w-full h-20 bg-orange absolute top-1/2 right-0 -translate-x-full ease-out duration-500 transition-all -translate-y-1/2 group-hover:translate-x-0"></div>

                <h3 className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white uppercase text-[16px] font-semibold">{name}</h3>

            </Link>
        </li >

    )
}

export default NavMenuButton
