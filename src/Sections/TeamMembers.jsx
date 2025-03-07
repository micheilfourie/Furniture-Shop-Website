import { CustomHeading, TeamMemberCard } from "../Components/index.js";
import { teamList } from "../data.js";

const TeamMembers = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <CustomHeading title="Team Members" />
      <div className="mt-10 mb-20 flex flex-wrap justify-center gap-10">
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
