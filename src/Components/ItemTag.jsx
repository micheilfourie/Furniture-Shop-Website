
const ItemTag = ({ tagType }) => {

    switch (tagType) {

        case "new":
            return (
                <div className={`bg-orange py-1 px-2 flex justify-center items-center rounded-lg`}>
                    <p className="text-sm text-white">New</p>
                </div>
            );

        case "sale":
            return (
                <div className={`bg-red py-1 px-2 flex justify-center items-center rounded-lg`}>
                    <p className="text-sm text-white">Sale</p>
                </div>
            );

        default:
            return null;
    }
};

export default ItemTag
