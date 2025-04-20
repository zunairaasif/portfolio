// import Navbar from "@componentsNavbar";
// import SocialLinks from "@componentssocialLinks";
// import Spline from "@splinetool/react-spline/next";

// export default function Home() {
//   return (
//     <div className="h-screen">
//       <Navbar />
//       <SocialLinks />
//       <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
//     </div>
//   );
// }

// import { lazy } from "react";

import SocialLinks from "@componentssocialLinks";
import Spline from "@splinetool/react-spline/next";

// import Cursor from "./Cursor";
// import setSplitText from "./utils/splitText";
import Navbar from "@componentsNavbar";
import Cursor from "@componentsCursor";
//
// const TechStack = lazy(() => import("./TechStack"));

const Home = ({ children }) => {
  // const [isDesktopView, setIsDesktopView] =
  //   useState < boolean > (window.innerWidth > 1024);

  // useEffect(() => {
  //   const resizeHandler = () => {
  //     setSplitText();
  //     setIsDesktopView(window.innerWidth > 1024);
  //   };
  //   resizeHandler();
  //   window.addEventListener("resize", resizeHandler);
  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialLinks />
      {/* {isDesktopView && children} */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
