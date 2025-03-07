import { Navbar, PageHeader } from "../Components/index.js";
import { Footer, AboutMain, TeamMembers } from "../Sections/index.js";
const About = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageHeading={"About Us"} breadcrumb={"about"} />
      <AboutMain />
      <TeamMembers />
      <Footer />
    </>
  );
};

export default About;
