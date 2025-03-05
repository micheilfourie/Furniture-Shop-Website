

const BurgerButton = ({ menuOpen, setMenuOpen }) => {
    return (
        <button onClick={() => setMenuOpen(!menuOpen)} className="relative hover:cursor-pointer">
            <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200">
                <div className="flex flex-col justify-between w-[30px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">

                    <div className={`bg-black h-[3px] w-7 transform transition-all duration-300 origin-left ${menuOpen ? "translate-x-10" : ""}`}></div>
                    <div className={`bg-black h-[3px] w-7 rounded transform transition-all duration-300 ${menuOpen ? "translate-x-10" : ""} delay-75`}></div>
                    <div className={`bg-black h-[3px] w-7 transform transition-all duration-300 origin-left ${menuOpen ? "translate-x-10" : ""} delay-150`}></div>

                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${menuOpen ? "translate-x-0" : ""} flex w-0 group-focus:w-12`}>
                        <div className={`absolute bg-black h-[3px] w-7 transform transition-all duration-500 rotate-0 delay-300 ${menuOpen ? "rotate-45" : ""}`}></div>
                        <div className={`absolute bg-black h-[3px] w-7 transform transition-all duration-500 -rotate-0 delay-300 ${menuOpen ? "-rotate-45" : ""}`}></div>
                    </div>

                </div>
            </div>
        </button>
    )
}

export default BurgerButton
