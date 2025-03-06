const CustomHeading = ({
  title,
  justifyCenter = true,
  uppercase = true,
  isSubtitle = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-center ${
        justifyCenter ? "items-center" : "items-left"
      }`}
    >
      <h2
        className={`font-extrabold text-black ${
          isSubtitle ? "text-lg" : "text-2xl"
        } ${uppercase ? "uppercase" : "capitalize"}`}
      >
        {title}
      </h2>
      <div className="bg-red my-2 h-[2px] w-[50px]"></div>
    </div>
  );
};

export default CustomHeading;
