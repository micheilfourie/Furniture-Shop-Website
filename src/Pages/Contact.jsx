import { Navbar, PageHeader } from "../Components/index.js";
import { Footer, ContactMain } from "../Sections/index.js";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageHeading={"Contact Us"} breadcrumb={"contact"} />
      <ContactMain />
      <Footer />
    </>
  );
};

export default Contact;
