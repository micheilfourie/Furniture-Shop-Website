const CatagoryButton = ({ action, catagory, catagoryRef, name }) => {
  return (
    <button
      onClick={action}
      className={`group flex h-[50px] cursor-pointer flex-col items-start justify-start`}
    >
      <h2
        className={`font-bold text-black uppercase ${
          catagory === catagoryRef ? "text-orange" : "group-hover:text-orange"
        }`}
      >
        {name}
      </h2>
      <div
        className={`bg-black ${
          catagory === catagoryRef ? "bg-orange" : "hidden"
        } my-2 h-[2px] w-[30px]`}
      ></div>
    </button>
  );
};

export default CatagoryButton;
