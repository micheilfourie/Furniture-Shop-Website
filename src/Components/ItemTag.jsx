
const ItemTag = ({ tagType, isInline = false }) => {

    switch (tagType) {

        case "new":
            return (
                <div className={`${isInline ? '' : 'absolute top-2 left-2'} bg-orange py-1 px-3 flex justify-center items-center rounded-lg`}>
                    <p className="text-md text-white">New</p>
                </div>
            );

        case "sale":
            return (
                <div className={`${isInline ? '' : 'absolute top-2 left-2'} bg-red py-1 px-3 flex justify-center items-center rounded-lg`}>
                    <p className="text-md text-white">Sale</p>
                </div>
            );

        default:
            return null;
    }
};

export default ItemTag
