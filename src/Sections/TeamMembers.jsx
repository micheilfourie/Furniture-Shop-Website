import { CustomHeading, TeamMemberCard } from "../Components/index.js";
import { teamList } from "../data.js";

const TeamMembers = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <CustomHeading title="Team Members" />
      <div className="mt-10 mb-10 flex justify-center gap-4 px-10 max-lg:flex-col">
        {teamList.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
