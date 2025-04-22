import Home from "./home";
import About from "./about";
import Navbar from "@components/Navbar";
import Cursor from "@components/Cursor";
import SocialLinks from "@components/SocialLinks";

const Page = () => {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialLinks />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Home />
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
