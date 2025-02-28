import { Link } from "react-router-dom"

const ButtonMain = ({ link, name }) => {
    return (

        <button className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-white hover:bg-white group px-2 py-3 w-[150px] border-[2px] border-orange">
            <Link to={link}>

                <span className="w-full h-20 bg-orange absolute top-1/2 right-0 -translate-x-full -translate-y-1/2 ease-out duration-500 transition-all group-hover:translate-x-0"></span>

                <span className="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white uppercase text-sm">{name}</span>

            </Link>
        </button>
    )
}

export default ButtonMain
