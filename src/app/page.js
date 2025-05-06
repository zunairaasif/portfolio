import Home from "./home";
import About from "./about";
import Navbar from "@components/Navbar";
import Cursor from "@components/Cursor";
import Links from "@components/Links";

const Page = () => {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <Links />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Home />
            <div className="relative bg-[#000001] h-screen w-full overflow-hidden">
              <div className="fixed -top-52 -left-44 w-[300px] h-[300px] rounded-full bg-purple-500 opacity-64 blur-[100px] pointer-events-none z-0" />
              <div className="fixed top-52 -right-44 w-[300px] h-[300px] rounded-full bg-purple-500 opacity-40 blur-[100px] pointer-events-none z-0" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
