"use client";
import React from "react";
import { SparklesCore } from "@components/ui/sparkles";
import { HoverEffect } from "@components/ui/card-hover-effect";

const Qalification = () => {
  const education = [
    {
      title: "BS Computer Science",
      year: "2018 - 2022",
      gpa: "CGPA - 3.11",
      description: "The University of Lahore, Lahore",
    },
    {
      title: "Intermediate",
      year: "2016 - 2018",
      gpa: "",
      description: "Divisional Public School & Inter College (DPS), Sahiwal",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-4xl xl:text-8xl font-bold text-center text-white relative z-20">
          My <span className="text-purple-400">Qualification</span>
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="flex items-center justify-center px-5">
        <HoverEffect items={education} />
      </div>
    </div>
  );
};

export default Qalification;
