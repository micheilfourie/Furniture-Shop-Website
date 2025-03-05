

const CatagoryButton = ({ action, catagory, catagoryRef, name }) => {
    return (
        <button
            onClick={action}
            className={`flex h-[50px] flex-col justify-start items-start cursor-pointer group`}>
            <h2 className={`font-bold text-black uppercase ${catagory === catagoryRef ? "text-orange" : "group-hover:text-orange"}`}>{name}</h2>
            <div className={`bg-black ${catagory === catagoryRef ? "bg-orange" : "hidden"}  h-[2px] w-[30px] my-2`}></div>
        </button>
    )
}

export default CatagoryButton
