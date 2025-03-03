

const CustomHeading = ({ title, justifyCenter = true, uppercase = true }) => {
    return (
        <div className={`w-full flex flex-col justify-center ${justifyCenter ? "items-center" : "items-left"} `}>
            <h2 className={`font-extrabold text-black ${uppercase ? "uppercase text-2xl" : "text-3xl capitalize"}`}>{title}</h2>
            <div className="bg-red h-[2px] w-[50px] my-2"></div>
        </div>
    )
}

export default CustomHeading
