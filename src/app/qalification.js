"use client";
import React from "react";
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
    <div className="flex flex-col items-center justify-center my-10">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-4xl xl:text-8xl font-bold text-center text-white relative z-20">
          My <span className="text-purple-400">Qualification</span>
        </h1>
        <div className="md:w-[45rem] w-[25rem] md:h-20 h-14 relative">
          <div className="absolute md:inset-x-25 inset-x-14 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-3/4 blur-sm" />
          <div className="absolute md:inset-x-25 inset-x-14 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute md:inset-x-65 inset-x-38 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute md:inset-x-65 inset-x-38 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <HoverEffect items={education} />
      </div>
    </div>
  );
};

export default Qalification;
