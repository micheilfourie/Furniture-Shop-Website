const ItemTag = ({ tagType }) => {
  switch (tagType) {
    case "new":
      return (
        <div
          className={`bg-orange flex items-center justify-center rounded-lg px-2 py-1`}
        >
          <p className="text-sm text-white">New</p>
        </div>
      );

    case "sale":
      return (
        <div
          className={`bg-red flex items-center justify-center rounded-lg px-2 py-1`}
        >
          <p className="text-sm text-white">Sale</p>
        </div>
      );

    default:
      return null;
  }
};

export default ItemTag;
