const BurgerButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative hover:cursor-pointer"
    >
      <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden transition-all duration-200">
        <div className="flex h-[20px] w-[30px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={`h-[3px] w-7 origin-left transform bg-black transition-all duration-300 ${
              menuOpen ? "translate-x-10" : ""
            }`}
          ></div>
          <div
            className={`h-[3px] w-7 transform rounded bg-black transition-all duration-300 ${
              menuOpen ? "translate-x-10" : ""
            } delay-75`}
          ></div>
          <div
            className={`h-[3px] w-7 origin-left transform bg-black transition-all duration-300 ${
              menuOpen ? "translate-x-10" : ""
            } delay-150`}
          ></div>

          <div
            className={`absolute top-2.5 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
              menuOpen ? "translate-x-0" : ""
            } flex w-0 group-focus:w-12`}
          >
            <div
              className={`absolute h-[3px] w-7 rotate-0 transform bg-black transition-all delay-300 duration-500 ${
                menuOpen ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`absolute h-[3px] w-7 -rotate-0 transform bg-black transition-all delay-300 duration-500 ${
                menuOpen ? "-rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default BurgerButton;
