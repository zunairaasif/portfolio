// import TypingText from "@components/TypingText";
// import Spline from "@splinetool/react-spline/next";

// export default function Home() {
//   return (
//     <div className="relative h-screen w-screen overflow-hidden">
//       <div className="overflow-hidden h-screen relative">
//         <div className="absolute top-0 left-0 h-[110vh] w-full">
//           <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
//         </div>

//         <div
//           className="absolute inset-0 z-20 text-white flex flex-col
//           items-center justify-center xl:mx-20 lg:mx-56 md:mx-20 mx-10"
//         >
//           <div
//             className="h-full text-snowWhite max-w-6xl w-full flex
//             items-center justify-center flex-col"
//           >
//             <div className="flex items-center w-full justify-between mt-20">
//               <div className="flex flex-col self-start gap-1">
//                 <h2 className="text-purple-300 xl:text-xl text-base font-light tracking-widest">
//                   Your Trusted
//                 </h2>
//                 <TypingText />
//                 <div className="flex gap-4 mt-3 flex-wrap">
//                   <button
//                     className="border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 xl:py-2 py-1
//                     text-white font-medium xl:px-6 px-4 rounded-full transition lg:text-base text-sm"
//                   >
//                     See My Work
//                   </button>
//                   <a
//                     target="_blank"
//                     href="https://wa.me/+923034774200"
//                     className="border border-white hover:border-purple-400 text-white xl:py-2 py-1
//                     hover:text-purple-300 font-medium xl:px-6 px-4 lg:text-base text-sm rounded-full
//                     transition"
//                   >
//                     Contact Me
//                   </a>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-4 items-end">
//                 <div className="flex items-center gap-2 mt-3 border-b border-purple-500 pb-2">
//                   <span className="xl:text-6xl text-5xl text-purple-200">
//                     3
//                   </span>
//                   <div className="xl:text-base text-sm tracking-widest">
//                     <span>Years</span>
//                     <br />
//                     <span>Experience</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end xl:text-lg text-sm text-end tracking-wide">
//                   <span>Interactive UI Development</span>
//                   <span>Cross-Platform Web Solutions</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col xl:mt-52 lg:mt-36 mt-80 items-center justify-self-end justify-center space-y-1">
//               <h1 className="xl:text-7xl md:text-6xl text-3xl font-bold uppercase tracking-wider leading-tight">
//                 Zunaira <span className="text-purple-400">Asif</span>
//               </h1>
//               <div className="xl:text-base text-sm text-gray-300">
//                 Let’s build something cool together 🚀
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import TypingText from "@components/TypingText";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="overflow-hidden h-screen relative">
        <div className="absolute top-0 left-0 h-[110vh] w-full">
          <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
        </div>

        <div
          className="absolute inset-0 z-20 text-white flex flex-col 
          items-center justify-center xl:mx-20 lg:mx-56 md:mx-20 mx-10"
        >
          <div
            className="h-full text-snowWhite max-w-6xl w-full flex 
            items-center justify-center flex-col"
          >
            <div className="flex flex-col mt-28 items-center justify-center space-y-1">
              <h1
                className="xl:text-7xl md:text-6xl text-3xl font-bold uppercase 
                tracking-wider leading-tight"
              >
                Zunaira <span className="text-purple-400">Asif</span>
              </h1>
              <div className="xl:text-base text-sm text-gray-300">
                Let’s build something cool together 🚀
              </div>
            </div>

            <div
              className="flex bg-black/60 backdrop-blur-sm p-6 rounded-2xl border 
              border-purple-900/50 shadow-lg shadow-purple-900/20 items-center w-full 
              justify-between xl:mt-52 lg:mt-26 mt-80 relative overflow-hidden"
            >
              <div className="flex flex-col self-start gap-1">
                <h2 className="text-purple-300 xl:text-xl text-base font-light tracking-widest">
                  Your Trusted
                </h2>
                <TypingText />
                <div className="flex gap-4 mt-3 flex-wrap">
                  <button
                    className="border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 xl:py-2 py-1
                    text-white font-medium xl:px-6 px-4 rounded-full transition lg:text-base text-sm"
                  >
                    See My Work
                  </button>
                  <a
                    target="_blank"
                    href="https://wa.me/+923034774200"
                    className="border border-white hover:border-purple-400 text-white xl:py-2 py-1
                    hover:text-purple-300 font-medium xl:px-6 px-4 lg:text-base text-sm rounded-full 
                    transition"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-start pointer-events-none overflow-hidden">
                <div className="relative h-full w-full" style={{ left: "15%" }}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="rotate-[-30deg] scale-x-150"
                  >
                    <path
                      d="M100,0 L0,100"
                      stroke="rgba(88, 28, 135, 0.5)"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-end">
                <div className="flex items-center gap-2 mt-3 border-b border-purple-500 pb-2">
                  <span className="xl:text-6xl text-5xl text-purple-200">
                    3
                  </span>
                  <div className="xl:text-base text-sm tracking-widest">
                    <span>Years</span>
                    <br />
                    <span>Experience</span>
                  </div>
                </div>

                <div className="flex flex-col items-end xl:text-lg text-sm text-end tracking-wide">
                  <span>Interactive UI Development</span>
                  <span>Cross-Platform Web Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import TypingText from "@components/TypingText";
// import Spline from "@splinetool/react-spline/next";

// export default function Home() {
//   return (
//     <div className="relative h-screen w-screen overflow-hidden">
//       <div className="overflow-hidden h-screen relative">
//         <div className="absolute top-0 left-0 h-[110vh] w-full">
//           <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
//         </div>

//         <div className="absolute inset-0 z-20 text-white flex flex-col justify-center xl:mx-80 lg:mx-64 md:mx-20 mx-10">
//           <div className="text-white max-w-4xl w-full flex flex-col xl:space-y-6 space-y-3">
//             <div className="flex flex-col justify-center space-y-1">
//               <h2 className="text-purple-300 xl:text-2xl md:text-xl text-lg font-light tracking-widest">
//                 Hey! I'm
//               </h2>

//               <h1 className="xl:text-6xl md:text-5xl text-3xl font-bold uppercase tracking-wider leading-tight">
//                 Zunaira <span className="text-purple-400">Asif</span>
//               </h1>
//             </div>

//             <TypingText />

//             <p className="xl:text-base text-sm text-gray-300 xl:max-w-3xl max-w-2xl leading-relaxed">
//               As a passionate developer, I thrive on building intuitive and
//               dynamic applications that deliver exceptional user experiences. I
//               am dedicated to writing clean, efficient code and constantly
//               improving my skills to stay ahead in the ever-evolving tech
//               landscape. I aim to transform ideas into interactive,
//               high-performance applications.
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <button className="border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full transition">
//                 See My Work
//               </button>
//               <a
//                 target="_blank"
//                 href="https://wa.me/+923034774200"
//                 className="border border-white hover:border-purple-400 text-white hover:text-purple-300 font-medium px-6 py-2 rounded-full transition"
//               >
//                 Contact Me
//               </a>
//             </div>

//             <div className="pt-6 xl:text-base text-sm text-gray-400">
//               Let’s build something cool together 🚀
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
