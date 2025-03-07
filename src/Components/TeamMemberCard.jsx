import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const TeamMemberCard = ({ image, name, position }) => {
  return (
    <div className="flex max-w-[320px] flex-col items-center justify-center gap-6 bg-white p-10 text-black transition-all duration-300 ease-in-out hover:shadow-lg">
      <img src={image} alt="" className="size-30" />
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl font-bold uppercase">{name}</h3>
        <h5 className="text-md uppercase">{position}</h5>
      </div>
      <p className="text-center text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        accusantium in asperiores saepe sint. Natus, expedita!
      </p>
      <div className="flex w-full items-center justify-center">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="hover:text-orange cursor-pointer p-3 text-xl text-black"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="hover:text-orange cursor-pointer p-3 text-xl text-black"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="hover:text-orange cursor-pointer p-3 text-xl text-black"
        />
      </div>
    </div>
  );
};

export default TeamMemberCard;
