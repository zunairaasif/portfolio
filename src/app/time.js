import React from "react";
import Spline from "@splinetool/react-spline/next";

const Time = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="overflow-hidden h-screen relative">
        <div className="absolute top-0 left-0 h-[110vh] w-full">
          <Spline scene="https://prod.spline.design/ZIqlRzNV-H9niC6e/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Time;
