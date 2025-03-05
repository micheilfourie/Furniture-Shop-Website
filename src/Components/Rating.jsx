import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

const Rating = ({ rating }) => {
    return (
        <div className="flex justify-center items-center">
            {[...Array(rating)].map((_, index) => (
                <StarIcon key={index} className="size-4 text-red" />
            ))}
            {[...Array(5 - rating)].map((_, index) => (
                <StarIconOutline key={index} className="size-4 text-red" />
            ))}
        </div>
    );
};

export default Rating;