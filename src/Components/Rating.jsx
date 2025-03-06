import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center justify-center">
      {[...Array(rating)].map((_, index) => (
        <StarIcon key={index} className="text-red size-4" />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <StarIconOutline key={index} className="text-red size-4" />
      ))}
    </div>
  );
};

export default Rating;
