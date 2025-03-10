import { Navbar, PageHeader } from "../Components/index.js";
import { Footer, BlogMain } from "../Sections/index.js";

const Blog = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageHeading={"Blog"} />
      <BlogMain />
      <Footer />
    </>
  );
};

export default Blog;
