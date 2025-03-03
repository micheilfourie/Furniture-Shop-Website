import { ItemTag } from "./index.js"

const ProductCard = ({ image, isSale, isNew, price, name, rating }) => {

    return (
        <div className="relative flex justify-center">

            {isSale &&
                <ItemTag tagType={"sale"} />
            }

            {isNew &&
                <ItemTag tagType={"new"} />
            }

            <img src={image} alt={`${name}Img`} />

        </div>
    )
}

export default ProductCard
