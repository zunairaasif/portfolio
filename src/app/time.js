import React from "react";
import Marquee from "react-fast-marquee";
import Spline from "@splinetool/react-spline/next";

const Time = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden md:py-0 py-20">
      <Marquee className="xl:text-7xl md:text-6xl text-4xl p-2">
        <span className="mx-10">•</span>
        <span>
          Pixel-perfect <span className="text-purple-400">Design</span>
        </span>
        <span className="mx-10">•</span>
        <span>
          Until Your <span className="text-purple-400">Satisfaction</span>
        </span>
        <span className="mx-10">•</span>
        <span>
          Guarded <span className="text-purple-400">Deadlines</span>
        </span>
      </Marquee>

      <div className="overflow-hidden min-h-screen relative lg:-my-0 md:-my-52 -my-28">
        <div className="absolute top-0 left-0 h-[110vh] w-full">
          <Spline scene="https://prod.spline.design/ZIqlRzNV-H9niC6e/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Time;
